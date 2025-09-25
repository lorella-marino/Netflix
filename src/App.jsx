import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";
import Loading from "./components/Loading";
import EditProfile from "./components/EditProfile";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import TvShowsPage from "./components/TvShowsPage";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Container className="text-center mt-5">{loading && <Loading />}</Container>
        {!loading && (
          <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/tvshows" element={<TvShowsPage />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        <MyFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
