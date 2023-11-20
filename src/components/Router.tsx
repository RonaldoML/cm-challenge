import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Collection } from '../pages/Collection';
import { Favorites } from '../pages/Favorites';

export const Router = () => {
  return (
    <Container>
      <Routes>
        <Route path='/collection' element={<Collection />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Container>
  );
};
