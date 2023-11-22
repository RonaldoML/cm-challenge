import { Button, Form, InputGroup } from 'react-bootstrap';

type InputProps = {
  text: string,
  setText: (e: string) => void,
  handleSearch: () => void,
};

export const Input = ({ text, setText, handleSearch }: InputProps) => {

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      handleSearch();
    }}>

      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={e => setText(e.target.value)}
          value={text}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>Search</Button>
      </InputGroup>
    </Form>
  )
}
