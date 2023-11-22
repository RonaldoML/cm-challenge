import { useContext } from 'react';

import { Col, Row } from 'react-bootstrap';

import { DetailCard } from './DetailCard';

import { DataContext } from '../context/DataContext';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { Media } from '../helpers/types';

type CardListProps = {
  media: [Media],
};

export const CardList = ({ media }: CardListProps) => {
  const { getItem } = useLocalStorage("favorites");
  const { state, addFavorites } = useContext(DataContext);
  const { favorites } = state;

  const favs: [Media] = getItem() || favorites;

  const removeFromFavorites = (arr: [Media], id: number) => {
    const newfavs = arr.filter((anime: Media) => anime.id !== id) as [Media];
    addFavorites(newfavs);
  };

  const handleFavorite = (animeId: number) => {
    const anime = media.filter((anime: Media) => anime.id === animeId)[0];
    if (!favs) {
      return addFavorites([anime]);
    }

    const isFav = favs.find((anime: Media) => anime.id === animeId);
    //If it is favorite then remove it
    if (isFav) {
      removeFromFavorites(favs, animeId)
    } else {
      const newFavs: [Media] = [...favs];
      newFavs.push(anime);
      addFavorites(newFavs);
    }
  };

  return (
    <Row md={3} xs={1} sm={2} lg={5} className="g-4">
      {media.map((media: Media) => (
        <Col key={media.id}>
          <DetailCard
            id={media.id}
            title={media.title}
            type={media.type}
            coverImage={media.coverImage}
            genres={media.genres}
            description={media.description}
            startDate={media.startDate}
            endDate={media.endDate}
            season={media.season}
            episodes={media.episodes}
            bannerImage={media.bannerImage}
            favorite={!!favs?.find((fav: Media) => fav.id === media.id)}
            handleFavorite={() => handleFavorite(media.id)}
          />
        </Col>
      ))}
    </Row>
  );
};
