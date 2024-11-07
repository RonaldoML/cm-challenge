import { useContext, useEffect, useState } from "react";

import { DataContext } from "../context/DataContext";

import { useLocalStorage } from "./useLocalStorage";

import { mediaQuery } from "../helpers/queries";

const API_BASE_URL = "https://graphql.anilist.co";

export function useGetData(search: string, page: number) {
  const { setItem, removeItem } = useLocalStorage("media");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { addData } = useContext(DataContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
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

        const result = await fetch(API_BASE_URL, {
          signal,
          method: "POST",
          body: JSON.stringify({
            query: mediaQuery,
            variables: variables,
          }),
          headers,
        });
        const resp = await result.json();

        if (!resp.ok || resp.errors) {
          setIsError(true);
        }

        addData(resp.data.Page);
        removeItem();
        setItem(resp.data.Page);
        setIsError(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (search) getData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  return { isLoading, isError };
}
