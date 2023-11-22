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
  return (
    <section className="mb-5">
      <h2 className="mt-4 mb-3">Favorites</h2>
      {
        !favs ? <FetchMessage noResults />
          :
          <CardList media={favs} />

      }
    </section>
  )
}
