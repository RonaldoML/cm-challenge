import { useState } from 'react';

import { Card } from 'react-bootstrap';

import { DetailModal } from './DetailModal';

import { Media } from '../helpers/types';
import { refineGenres, refineTitle } from '../utils/utils';
import HearOutline from '../assets/favorite.svg';
import HearChecked from '../assets/heart_check.svg';

type DetailCardProps = Media & {
  handleFavorite: () => void,
};

export const DetailCard = ({
  title,
  coverImage,
  genres,
  description,
  startDate,
  endDate,
  season,
  episodes,
  bannerImage,
  favorite,
  type,
  handleFavorite,
}: DetailCardProps) => {

  const [openModal, setOpenModal] = useState(false);

  const favoriteImg = favorite ? HearChecked : HearOutline;

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src={coverImage.large} height={300} className="border-bottom" />
        <Card.Body>
          <article className="d-flex justify-content-between">
            <Card.Title style={{ minWidth: "90%" }}>{refineTitle(title.romaji)}</Card.Title>
            <Card.Img className="mt-1" src={favoriteImg} height={17} alt="favorite" onClick={handleFavorite} />
          </article>
          <Card.Subtitle className="mb-2 text-muted">{refineGenres(genres)}</Card.Subtitle>
          <Card.Link onClick={handleOpenModal} className='fs-7' style={{ cursor: "pointer" }}>More</Card.Link>
        </Card.Body>
      </Card >
      <DetailModal
        type={type}
        modalShow={openModal}
        onHide={handleOpenModal}
        title={title.romaji}
        description={description}
        dateStart={startDate}
        season={season}
        dateEnd={endDate}
        episodes={episodes}
        bannerImage={bannerImage}
        genres={genres}
      />
    </>
  )
}
