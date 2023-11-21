import { useContext } from "react";
import { CardList } from "../components/CardList";
import { FetchMessage } from "../components/FetchMessage";
import { DataContext } from "../context/DataContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Favorites = () => {

  const { getItem } = useLocalStorage("favorites");
  const { state } = useContext(DataContext);
  const { favorites } = state;

  const favs = getItem() || favorites;

  if (!favs) return <FetchMessage noResults />
  return (
    <>
      <h1>Favorites</h1>
      <CardList media={favs} />
    </>
  )
}
