import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Copertina from "./Copertina";
import { Link } from "react-router-dom";

const Gallery = ({ title, filmTitle }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${filmTitle}&apikey=1a15f902`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search.slice(0, 6));
        }
      })
      .catch((error) => console.error("Errore", error));
  }, [filmTitle]);

  return (
    <Container className="my-3">
      <h5 className="mb-3 text-white">{title}</h5>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={6} sm={4} xl={2} className="mb-4">
            <Link to={`/movie/${movie.imdbID}`}>
              <Copertina poster={movie.Poster} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
