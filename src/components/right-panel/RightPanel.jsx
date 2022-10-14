import { useSelector } from "react-redux";

import { useGetTopChartsQuery } from "../../store/services/shazamCore";

import { Container } from "../../styles/components/RightPanelStyled";

import ArtistsArea from "./ArtistsArea";
import ChartArea from "./ChartArea";

function RightPanel() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, isError } = useGetTopChartsQuery();

  const topArtists = data?.slice(0, 8);
  const topCharts = data?.slice(0, 5);

  return (
    <Container>
      <ArtistsArea
        topArtists={topArtists}
        isFetching={isFetching}
        isError={isError}
      />

      <ChartArea
        topCharts={topCharts}
        data={data}
        isFetching={isFetching}
        isError={isError}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />
    </Container>
  );
}

export default RightPanel;
