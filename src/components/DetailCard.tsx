import { Card } from 'react-bootstrap';
import { Media } from '../helpers/types';
import { useState } from 'react';
import { DetailModal } from './DetailModal';
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
        <Card.Img variant="top" src={coverImage.large} height={350} />
        <Card.Body>
          <article style={{ display: "flex", justifyContent: "space-between" }}>
            <Card.Title style={{ minWidth: "90%" }}>{refineTitle(title.romaji)}</Card.Title>
            <Card.Img className="mt-1" src={favoriteImg} height={17} alt="favorite" onClick={handleFavorite} />
          </article>
          <Card.Subtitle className="mb-2 text-muted">{refineGenres(genres)}</Card.Subtitle>
          <Card.Link onClick={handleOpenModal} className='fs-6' style={{ cursor: "pointer" }}>More</Card.Link>
        </Card.Body>
      </Card >
      <DetailModal
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
