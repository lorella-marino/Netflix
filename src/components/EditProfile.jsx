import { Container, Row, Col, Button, Dropdown, Form, Image } from "react-bootstrap";
import { FaPen } from "react-icons/fa";

const EditProfile = () => {
  return (
    <Container className="w-50 ">
      <h1 className="mb-3 fw-normal display-4 text-white">Edit Profile</h1>
      <hr />

      <div className="d-flex flex-row">
        <div className="position-relative">
          <Image
            src="https://img.freepik.com/foto-gratuito/colpo-verticale-di-felice-femmina-dalla-pelle-scura-con-i-capelli-ricci_273609-15519.jpg"
            rounded
            width="130"
            alt="user"
          />
          <FaPen className="position-absolute edit-icon" style={{ top: "10px", right: "10px", cursor: "pointer" }} />
        </div>

        <div className="mx-4  w-100">
          <Row className="row-cols-1 gy-4 mt-1">
            <Col className="mt-0">
              <Button variant="secondary" className="text-start fs-5 rounded-1 mb-4 w-100">
                Strive Student
              </Button>
            </Col>

            <Col className="mt-0">
              <h5 className="text-secondary">Language:</h5>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" className="rounded-1">
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Italian</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                  <Dropdown.Item>French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <hr />

            <Col className="mt-0">
              <h5 className="text-secondary">Maturity Settings:</h5>
              <Button variant="secondary" className="disabled text-start fs-4 rounded-1 mb-4">
                ALL MATURITY RATINGS
              </Button>
              <p className="text-white">Show titles of all maturity ratings for this profile.</p>
              <Button variant="outline-secondary" className="rounded-1 fs-4 mt-3 px-4">
                EDIT
              </Button>
            </Col>

            <hr />

            <Col className="mt-0">
              <h5 className="text-secondary">Autoplay Controls</h5>
              <Form.Check
                type="checkbox"
                label="Autoplay next episode in a series on all devices."
                defaultChecked
                className="fs-4 text-secondary"
              />
              <Form.Check
                type="checkbox"
                label="Autoplay previews while browsing on all devices."
                defaultChecked
                className="fs-4 text-secondary"
              />
            </Col>
          </Row>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-between">
        <Button variant="light" className="rounded-1 fs-5 px-4 mt-3">
          SAVE
        </Button>
        <Button variant="outline-secondary" className="rounded-1 fs-5 px-4 mt-3">
          CANCEL
        </Button>
        <Button variant="outline-secondary" className="rounded-1 fs-5 px-4 mt-3">
          DELETE PROFILE
        </Button>
      </div>
    </Container>
  );
};

export default EditProfile;
