import { useContext } from 'react';

import { CardList } from './CardList';
import { PaginationBar } from './PaginationBar';

import { DataContext } from '../context/DataContext';

import { useLocalStorage } from '../hooks/useLocalStorage';

type DisplayCollectionsProps = {
  setPage: (page: number) => void,
  page: number,
}

export const DisplayCollections = ({ setPage, page }: DisplayCollectionsProps) => {
  const { setItem } = useLocalStorage("page");
  const { getItem: getMedia } = useLocalStorage("media");

  const { state } = useContext(DataContext);
  const { response } = state;

  const data = getMedia() || response;

  const handleLastPage = () => {
    const nextPage = page - 1 === 0 ? 1 : page - 1;
    setPage(nextPage);
    setItem(nextPage)
  };

  const handleNextPage = () => {
    const next = data?.pageInfo.hasNextPage && (page < 4) ? page + 1 : 1;
    setPage(next);
    setItem(next);
  };

  if (!data) return;
  return (
    <section>
      <CardList media={data.media} />
      <PaginationBar
        handleLastPage={handleLastPage}
        handleNextPage={handleNextPage}
        pageInfo={data.pageInfo}
      />
    </section>
  )
}
