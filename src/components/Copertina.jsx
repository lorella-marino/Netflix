import { Card } from "react-bootstrap";

const Copertina = ({ poster }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img variant="top" src={poster} className=" rounded-1" style={{ objectFit: "cover", height: "18rem" }} />
    </Card>
  );
};

export default Copertina;
