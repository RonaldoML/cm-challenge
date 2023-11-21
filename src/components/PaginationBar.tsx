
import { Col, Container, Row } from 'react-bootstrap';
import ArrowBack from "../assets/arrow_back.svg";
import ArrowNext from "../assets/arrow_next.svg";
import { PageInfo } from '../helpers/types';

type PaginationBarProps = {
  handleLastPage: () => void,
  handleNextPage: () => void,
  pageInfo: PageInfo
};

export const PaginationBar = ({
  handleLastPage,
  handleNextPage,
  pageInfo,
}: PaginationBarProps) => {

  if (!pageInfo.total) return;

  return (
    <Container>
      <Row className="col-md-1 mx-auto mt-3 position-relative">
        {<Col onClick={handleLastPage} className="position-absolute top-50 start-0 translate-middle">
          <img width={15} src={ArrowBack} />
        </Col>}
        {pageInfo.currentPage && <Col className="position-absolute top-50 start-50 translate-middle">
          <p className="mt-3">{pageInfo.currentPage}</p>
        </Col>}
        {<Col onClick={handleNextPage} className="position-absolute top-50 start-100 translate-middle">
          <img width={15} src={ArrowNext} />
        </Col>}
      </Row>
    </Container>
  );
};
