import { useReducer } from 'react';

import { DataContext } from './DataContext';
import { DataReducer } from './DataReducer';
import { DataState, Media, MediaResponse } from '../helpers/types';

const INITIAL_STATE: DataState = {
  page: 1,
  favorites: null,
  media: null,
  isLoading: false,
  isError: false
}

type ProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const DataProvider = ({ children }: ProviderProps) => {

  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  const addData = (data: MediaResponse) => {
    dispatch({ type: 'addMedia', payload: data })
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