import { useSelector } from "react-redux";

import { useGetTopChartsQuery } from "../store/services/shazamCore";

import { VeryBigText } from "../styles/Text";
import { DisplayList } from "../styles/DisplayList";
import { Container } from "../styles/pages/TopChartsStyled";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import Song from "../components/cards/Song";

function TopCharts() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, isError } = useGetTopChartsQuery();

  return (
    <Container>
      <VeryBigText>Top Charts</VeryBigText>

      <DisplayList>
        {isFetching && <DancingBars />}

        {isError && <ResultsError />}

        {!isFetching &&
          !isError &&
          data?.map((song, i) => {
            return (
              <Song
                key={song.key}
                i={i}
                song={song}
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
              />
            );
          })}
      </DisplayList>
    </Container>
  );
}

export default TopCharts;
