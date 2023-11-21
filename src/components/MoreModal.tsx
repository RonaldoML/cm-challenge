import { Modal } from 'react-bootstrap';
import { Date } from '../helpers/types';

type MoreModalProps = {
  modalShow: boolean,
  title: string,
  onHide: () => void,
  description: string
  dateStart: Date,
  dateEnd: Date,
}

export const MoreModal = ({
  modalShow,
  title,
  onHide,
  description,
  dateStart,
  dateEnd,
}: MoreModalProps) => {
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
        <p>{description}</p>
        <p>Emitted from {dateStart?.day}/{dateStart?.month}/{dateStart?.year} to {dateEnd?.day}/{dateEnd?.month}/{dateEnd?.year}</p>
        <p></p>
      </Modal.Body>
    </Modal>
  )
}
