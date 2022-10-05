import { Routes, Route } from "react-router-dom";

import Discovery from "./Discovery";
import TopCharts from "./TopCharts";
import TopArtists from "./TopArtists";

function Pages() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Discovery />} />
        <Route path="/top-charts" element={<TopCharts />} />
        <Route path="/top-artists" element={<TopArtists />} />
      </Routes>
    </main>
  );
}

export default Pages;
