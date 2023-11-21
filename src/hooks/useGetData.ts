import { useEffect, useState } from "react";
import { mediaQuery } from "../helpers/queries";
import { MediaResponse } from '../helpers/types';
import { useLocalStorage } from "./useLocalStorage";


export function useGetData(search: string, page: number) {
  const { setItem, getItem, removeItem } = useLocalStorage("media");
  const [data, setData] = useState<MediaResponse | null>(getItem());
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);



  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {

        const variables = {
          search,
          page,
          perPage: 15,
        };

        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
        };

        const result = await fetch('https://graphql.anilist.co', {
          method: 'post',
          body: JSON.stringify({
            query: mediaQuery,
            variables: variables
          }),
          headers
        })
        const resp = await result.json();
        if (resp.data) {
          setData(resp.data.Page);
          removeItem();
          setItem(resp.data.Page);
        }
        if (resp.errors) {
          setIsError(true);
        }

      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (search) getData();
  }, [search, page]);


  return { data, isLoading, isError };
}
