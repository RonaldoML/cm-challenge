import { createContext } from "react";

import { DataState, Media, MediaResponse } from "../helpers/types";


export type ContextProps = {
  state: DataState,
  addData: (respoonse: MediaResponse) => void;
  addFavorites: (fav: [Media]) => void;
}


export const DataContext = createContext<ContextProps>({} as ContextProps);