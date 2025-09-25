import { Container, Dropdown, Button } from "react-bootstrap";
import { BsTextLeft, BsGridFill } from "react-icons/bs";

const Section = ({ title }) => {
  return (
    <section>
      <Container id="movies" className="d-flex text-white align-items-center">
        <h3>{title}</h3>

        <Dropdown className="mx-4">
          <Dropdown.Toggle variant="outline-light" className="rounded-1">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Romantic</Dropdown.Item>
            <Dropdown.Item href="#">Family</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex ms-auto align-items-center">
          <Button variant="outline-secondary" className="rounded-1 pt-0 pb-1 px-2">
            <BsTextLeft />
          </Button>
          <Button variant="outline-secondary" className="rounded-1 pt-0 pb-1 px-2 ms-2">
            <BsGridFill />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Section;
