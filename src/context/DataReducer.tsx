import { DataState, Media, MediaResponse } from "../helpers/types";

type DataAction =
  | { type: 'addMedia', payload: MediaResponse }
  | { type: 'addFavorites', payload: [Media] };


export const DataReducer = (state: DataState, action: DataAction): DataState => {

  switch (action.type) {
    case "addMedia":
      window.localStorage.setItem("media", JSON.stringify(action.payload));
      return {
        ...state,
        media: action.payload
      }

    case 'addFavorites': {
      window.localStorage.setItem("favorites", JSON.stringify(action.payload));
      return {
        ...state,
        favorites: action.payload
      }
    }
    default:
      return state;
  }

}