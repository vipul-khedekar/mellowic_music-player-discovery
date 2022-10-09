import { Routes, Route } from "react-router-dom";

import Discovery from "./Discovery";
import TopCharts from "./TopCharts";
import TopArtists from "./TopArtists";
import Lyrics from "./Lyrics";
import ArtistInfo from "./ArtistInfo";

function Pages() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Discovery />} />
        <Route path="/top-charts" element={<TopCharts />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/songs/:key" element={<Lyrics />} />
        <Route path="/artists/:key" element={<ArtistInfo />} />
      </Routes>
    </main>
  );
}

export default Pages;
