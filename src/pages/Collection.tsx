import { useGetData } from "../hooks/useGetData";
import { useState } from "react";

import { CardList } from "../components/CardList";
import { PaginationBar } from "../components/PaginationBar";
import { Input } from "../components/Input";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FetchMessage } from "../components/FetchMessage";

export const Collection = () => {
  const { getItem: getSavedSearch, setItem: saveSearch } = useLocalStorage("search");
  const { getItem: getSavedPage, setItem: savePage } = useLocalStorage("page");

  const [text, setText] = useState(getSavedSearch() ?? "");
  const [search, setSearch] = useState(text);
  const [page, setPage] = useState(getSavedPage() ?? 1);

  const { data, isLoading, isError } = useGetData(search, page);

  const handleLastPage = () => {
    const nextPage = page - 1 === 0 ? 1 : page - 1;
    setPage(nextPage);
    savePage(nextPage)
  };

  const handleNextPage = () => {
    const next = data?.pageInfo.hasNextPage && (page < 4) ? page + 1 : 1;
    setPage(next);
    savePage(next);
  };

  const handleSearch = () => {
    setSearch(text);
    setPage(1);
    saveSearch(text);
  }

  return (
    <section className="mb-3">
      <Input text={text} handleSearch={handleSearch} setText={setText} />
      {isLoading && <FetchMessage isLoading />}
      {isError && <FetchMessage isError />}
      {
        data?.media && (
          <>
            <CardList media={data.media} />
            <PaginationBar
              handleLastPage={handleLastPage}
              handleNextPage={handleNextPage}
              pageInfo={data.pageInfo}
            />
          </>)
      }
    </section >
  )
};
