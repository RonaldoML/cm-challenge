import { Card, Modal } from 'react-bootstrap';
import { Date, Season } from '../helpers/types';
import { refineDate, refineDescription, seasons } from '../utils/utils';


type MoreModalProps = {
  modalShow: boolean,
  title: string,
  onHide: () => void,
  description: string
  dateStart: Date,
  dateEnd: Date,
  season: Season,
  episodes: number | null,
  bannerImage: string,
  genres: [string],
}

export const DetailModal = ({
  modalShow,
  title,
  onHide,
  description,
  dateStart,
  dateEnd,
  season,
  episodes,
  bannerImage,
  genres,
}: MoreModalProps) => {

  const { name, img } = seasons[season ?? "SUMMER"];

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bannerImage && (
          <img src={bannerImage} alt={title} width={"100%"} className="rounded-1 mb-2 border border-dark" />
        )}
        {description && (
          <Card.Subtitle className="mb-2">{refineDescription(description)}</Card.Subtitle>
        )}
        {genres && <Card.Text className="mb-2">{genres.join("/")}</Card.Text>}
        <Card.Text className='fs-6 mb-2'>Emitted from {refineDate(dateStart)} to {refineDate(dateEnd)}</Card.Text>
        <Card.Text className="mb-2">Season: <img src={img} alt={name} width={15} className="mb-1" /> {name}</Card.Text>
        {episodes && (<Card.Text className="mb-2"> Episodes: {episodes}</Card.Text>)}
      </Modal.Body>
    </Modal>
  )
};
