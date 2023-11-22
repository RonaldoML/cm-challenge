import { useContext, useEffect, useState } from "react";

import { DataContext } from "../context/DataContext";

import { useLocalStorage } from "./useLocalStorage";

import { mediaQuery } from "../helpers/queries";


export function useGetData(search: string, page: number) {
  const { setItem, removeItem } = useLocalStorage("media");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { addData } = useContext(DataContext);

  const controller = new AbortController();
  const signal = controller.signal;

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
          signal,
          method: 'post',
          body: JSON.stringify({
            query: mediaQuery,
            variables: variables
          }),
          headers
        })
        const resp = await result.json();
        if (resp.data) {
          addData(resp.data.Page);
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

    return () => {
      controller.abort()
    }
  }, [search, page]);


  return { isLoading, isError };
}
