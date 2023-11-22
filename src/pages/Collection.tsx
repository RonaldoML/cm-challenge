import { useState } from "react";

import { Input } from "../components/Input";
import { FetchMessage } from "../components/FetchMessage";
import { DisplayCollections } from "../components/DisplayCollections";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { useGetData } from "../hooks/useGetData";

export const Collection = () => {

  //Get search and page values from Local storage
  const { getItem: getSavedSearch, setItem: saveSearch } = useLocalStorage("search");
  const { getItem: getSavedPage } = useLocalStorage("page");

  const [text, setText] = useState(getSavedSearch() ?? "");
  const [search, setSearch] = useState(text);

  const [page, setPage] = useState(getSavedPage() ?? 1);

  const { isLoading, isError } = useGetData(search, page);

  //Fetch is done when press enter or click search button
  const handleSearch = () => {
    setSearch(text);
    setPage(1);
    saveSearch(text);
  }

  return (
    <section className="mb-5 mt-4">
      <h2>Collection</h2>
      <Input text={text} handleSearch={handleSearch} setText={setText} />
      {isLoading && <FetchMessage isLoading />}
      {isError && <FetchMessage isError />}
      <DisplayCollections page={page} setPage={setPage} />
    </section >
  )
};
