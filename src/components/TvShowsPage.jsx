import Gallery from "./Gallery";
import Section from "./Section";

const TvShowsPage = () => {
  return (
    <div>
      <Section title="Tv Shows" />
      <Gallery title="Squid Game" filmTitle="Squid Game" />
      <Gallery title="Attack on Titan" filmTitle="Attack on Titan" />
      <Gallery title="Game of Thrones" filmTitle="Game of Thrones" />
    </div>
  );
};

export default TvShowsPage;
