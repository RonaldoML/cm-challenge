import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100" >
      <section>
        <Row>404 | Page not found</Row>
        <Row className="text-center"><NavLink to="/">Home</NavLink></Row>
      </section>
    </Container>
  );
};
