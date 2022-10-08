import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/components/RightPanelStyled";
import ChartArea from "./ChartArea";
import ArtistsArea from "./ArtistsArea";
import { PlayAndPause } from "../PlayAndPause";
import { setActiveSong, playAndPause } from "../../store/features/player";
import { useGetTopChartsQuery } from "../../store/services/shazamCore";

function RightPanel() {
  const dispatch = useDispatch();
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);

  // const {data, isFetching, isError} = useGetTopChartsQuery()

  // const topCharts = data?.substr(0, 5);

  // function handlePlay() {
  //   dispatch(playAndPause(true));
  //   dispatch(setActiveSong({ data }));
  // }

  // function handlePause() {
  //   dispatch(playAndPause(false));
  // }

  return (
    <Container>
      <ArtistsArea />

      <ChartArea />
    </Container>
  );
}

export default RightPanel;
