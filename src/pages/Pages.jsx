import { Routes, Route } from "react-router-dom";

import Discovery from "./Discovery";
import TopCharts from "./TopCharts";
import TopArtists from "./TopArtists";
import Lyrics from "./Lyrics";
import ArtistInfo from "./ArtistInfo";
import AroundYou from "./AroundYou";
import SearchResults from "./SearchResults";

function Pages() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Discovery />} />

        <Route path="/top-charts" element={<TopCharts />} />

        <Route path="/top-artists" element={<TopArtists />} />

        <Route path="/around-you" element={<AroundYou />} />

        <Route path="/songs/:key" element={<Lyrics />} />

        <Route path="/artists/:key" element={<ArtistInfo />} />

        <Route path="/search-result/:searchQuery" element={<SearchResults />} />
      </Routes>
    </main>
  );
}

export default Pages;
