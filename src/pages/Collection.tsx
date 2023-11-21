import { Container } from "react-bootstrap";
import { useGetData } from "../hooks/useGetData";
import { useState } from "react";

import { CardList } from "../components/CardList";
import { PaginationBar } from "../components/PaginationBar";
import { Input } from "../components/Input";

export const Collection = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetData(search, page);

  const handleLastPage = () => {
    const nextPage = page - 1 === 0 ? 1 : page - 1;
    setPage(nextPage);
  };

  const handleNextPage = () => {
    const next = data?.pageInfo.hasNextPage ? page + 1 : 1;
    setPage(next);
  };

  const handleSearch = () => {
    setSearch(text);
    setPage(1);
  }

  return (
    <section className="mb-3">
      <Input text={text} handleSearch={handleSearch} setText={setText} />
      {
        isLoading && <Container className="center">Loading...</Container>
      }
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
      {
        isError && <p>Something wen't wrong!...</p>
      }
    </section >
  )
};
