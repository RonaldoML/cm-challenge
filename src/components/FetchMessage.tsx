import { Container } from 'react-bootstrap';

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

  return (<Container className="text-center">{message}</Container>)
}
