import { Card } from 'react-bootstrap';
import { Media } from '../helpers/types';
import { useState } from 'react';
import { MoreModal } from './MoreModal';

type DetailCardProps = Media;

export const DetailCard = ({ title, coverImage, genres, description, startDate, endDate }: DetailCardProps) => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <>
      <Card>
        <Card.Img variant="top" src={coverImage.large} height={350} />
        <Card.Body>
          <Card.Title>{title.romaji}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{genres.join('-')}</Card.Text>
          <Card.Link onClick={handleOpenModal} className='fs-6'>More</Card.Link>
        </Card.Body>
      </Card>
      <MoreModal
        modalShow={openModal}
        onHide={handleOpenModal}
        title={title.romaji}
        description={description}
        dateStart={startDate}
        dateEnd={endDate} />
    </>
  )
}
