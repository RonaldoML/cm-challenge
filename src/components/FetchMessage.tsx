import { Container, Spinner } from 'react-bootstrap';

type FetchMessageProps = {
  isLoading?: boolean,
  isError?: boolean,
  noResults?: boolean
}

export const FetchMessage = ({ isLoading, isError, noResults }: FetchMessageProps) => {

  let message = "";

  if (isLoading) {
    message = "Loading...";
  } else if (isError) {
    message = "Something went wrong! :(";
  } else if (noResults) {
    message = "No results found! :("
  }
  if (!isLoading && !isError) return;

  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    )
  }

  return (<Container className="text-center mb-3">{message}</Container>)
}
