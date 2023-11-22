import { useReducer } from 'react';

import { DataContext } from './DataContext';
import { DataReducer } from './DataReducer';

import { DataState, Media, MediaResponse } from '../helpers/types';

const INITIAL_STATE: DataState = {
  favorites: null,
  response: null,
}

type ProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const DataProvider = ({ children }: ProviderProps) => {

  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  const addData = (response: MediaResponse) => {
    dispatch({ type: "addMedia", payload: response });
  };

  const addFavorites = (favs: [Media]) => {
    dispatch({ type: 'addFavorites', payload: favs })
  }


  return (
    <DataContext.Provider value={{
      state,
      addData,
      addFavorites,
    }}>
      {children}
    </DataContext.Provider>
  )
}