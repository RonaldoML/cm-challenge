import { Container } from 'react-bootstrap';

import { Route, Routes } from 'react-router-dom';
import { Collection } from '../pages/Collection';
import { Favorites } from '../pages/Favorites';
import { Welcome } from '../pages/Welcome';
import { NotFound } from '../pages/NotFound';

export const Router = () => {
  return (
    <Container>
      <Routes>
        <Route path='/collection' element={<Collection />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/' element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
