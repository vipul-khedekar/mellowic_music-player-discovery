import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/components/RightPanelStyled";
import ChartArea from "./ChartArea";
import ArtistsArea from "./ArtistsArea";
import { PlayAndPause } from "../PlayAndPause";
import { setActiveSong, playAndPause } from "../../store/features/player";
import { useGetTopChartsQuery } from "../../store/services/shazamCore";

function RightPanel() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, isError } = useGetTopChartsQuery();

  const topArtists = data?.slice(0, 8);
  const topCharts = data?.slice(0, 5);

  function handlePlay() {
    dispatch(playAndPause(true));
    dispatch(setActiveSong({ data }));
  }

  function handlePause() {
    dispatch(playAndPause(false));
  }

  return (
    <Container>
      <ArtistsArea
        topArtists={topArtists}
        isFetching={isFetching}
        isError={isError}
      />

      <ChartArea
        topCharts={topCharts}
        isFetching={isFetching}
        isError={isError}
        activeSong={activeSong}
        isPlaying={isPlaying}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
    </Container>
  );
}

export default RightPanel;
