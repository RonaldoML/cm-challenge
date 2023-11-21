
import { Col, Row } from 'react-bootstrap';
import { DetailCard } from './DetailCard'
import { Media } from '../helpers/types'

type CardListProps = {
  media: [Media]
};

export const CardList = ({ media }: CardListProps) => {
  return (
    <Row md={3} xs={1} lg={4} className="g-4">
      {media.map((media: Media) => (
        <Col key={media.id}>
          <DetailCard
            title={media.title}
            coverImage={media.coverImage}
            genres={media.genres}
            description={media.description}
            startDate={media.startDate}
            endDate={media.endDate}
          />
        </Col>
      ))}
    </Row>
  )
}
