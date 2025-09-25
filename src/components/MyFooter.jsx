import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const MyFooter = () => {
  return (
    <footer className="  py-5">
      <Container className="w-50 fs-6 m-auto pt-5 pb-3">
        <div className="mb-3">
          <BsFacebook className="me-2 text-secondary" size={20} />
          <BsInstagram className="me-2 text-secondary" size={20} />
          <BsTwitter className="me-2 text-secondary" size={20} />
          <BsYoutube className="me-2 text-secondary" size={20} />
        </div>
        <Row className="text-secondary text-start">
          <Col>
            <p>Audio and Subtitles</p>
            <p>Media</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </Col>
          <Col>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </Col>
        </Row>
        <Button variant="outline-secondary" className="rounded-1 fs-6 mt-3">
          Service Code
        </Button>
        <p className="fs-7 text-secondary pt-2 mb-0">&copy; 1997-2019 Netflix, Inc.</p>
      </Container>
    </footer>
  );
};

export default MyFooter;
