import { Routes, Route } from "react-router-dom";

import { Main } from "../styles/pages/PagesStyled";

import Discovery from "./Discovery";
import TopCharts from "./TopCharts";
import TopArtists from "./TopArtists";
import Lyrics from "./Lyrics";
import ArtistInfo from "./ArtistInfo";
import AroundYou from "./AroundYou";
import SearchResults from "./SearchResults";

function Pages() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Discovery />} />

        <Route path="/top-charts" element={<TopCharts />} />

        <Route path="/top-artists" element={<TopArtists />} />

        <Route path="/around-you" element={<AroundYou />} />

        <Route path="/songs/:key" element={<Lyrics />} />

        <Route path="/artists/:key" element={<ArtistInfo />} />

        <Route path="/search-result/:searchQuery" element={<SearchResults />} />
      </Routes>
    </Main>
  );
}

export default Pages;
