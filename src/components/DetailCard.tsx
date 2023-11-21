import { Card } from 'react-bootstrap';
import { Media } from '../helpers/types';
import { useState } from 'react';
import { DetailModal } from './DetailModal';
import { refineGenres, refineTitle } from '../utils/utils';

type DetailCardProps = Media;

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
}: DetailCardProps) => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src={coverImage.large} height={350} />
        <Card.Body>
          <Card.Title>{refineTitle(title.romaji)}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{refineGenres(genres)}</Card.Subtitle>
          <Card.Link onClick={handleOpenModal} className='fs-6' style={{ cursor: "pointer" }}>More</Card.Link>
        </Card.Body>
      </Card>
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
