import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Copertina from "./Copertina";
import CommentArea from "./CommentArea";
import Loading from "./Loading";
import Error from "./Error";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=1a15f902`);
        if (!response.ok) {
          throw new Error("Errore");
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Container className="m-auto text-white">
      {movie && (
        <>
          <Row className="d-flex justify-content-between">
            <Col sm={6} md={4} lg={3} xl={2} className="h-100">
              <Copertina poster={movie.Poster} />
            </Col>
            <Col md={6}>
              <h2>{movie.Title}</h2>
              <p>
                <strong>Anno:</strong> {movie.Year}
              </p>
              <p>
                <strong>Genere:</strong> {movie.Genre}
              </p>
              <p>
                <strong>Trama:</strong> {movie.Plot}
              </p>
              <p>
                <strong>Regista:</strong> {movie.Director}
              </p>
              <p>
                <strong>Attori:</strong> {movie.Actors}
              </p>
            </Col>
            <Col sm={6} md={6} lg={3}>
              <CommentArea asin={movie.imdbID} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
