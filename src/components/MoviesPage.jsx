import Gallery from "./Gallery";
import Section from "./Section";

const MoviesPage = () => {
  return (
    <div>
      <Section title="Movies" />
      <Gallery title="Harry Potter" filmTitle="Harry Potter" />
      <Gallery title="Il Signore degli Anelli" filmTitle="Lord of the Rings" />
      <Gallery title="Shrek" filmTitle="Shrek" />
    </div>
  );
};

export default MoviesPage;
