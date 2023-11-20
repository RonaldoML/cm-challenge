import { useEffect, useState } from "react";
import { mediaQuery } from "../helpers/queries";
import { MediaResponse } from '../helpers/types';


export function useGetData(search: string, page: number) {
  const [data, setData] = useState<MediaResponse | null>(null);
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
        console.log(resp)
        if (resp.data) {
          setData(resp.data.Page);
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
    getData();
  }, [search, page]);


  return { data, isLoading, isError };
}
