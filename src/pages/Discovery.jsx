import { useDispatch, useSelector } from "react-redux";

import { ColumnContainer } from "../styles/Container";
import { DisplayList } from "../styles/DisplayList";
import { Container, BigText, Selection } from "../styles/pages/DiscoveryStyled";

import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../store/services/shazamCore";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import Song from "../components/cards/Song";

function Discovery() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, isError } = useGetTopChartsQuery();

  return (
    <ColumnContainer>
      <Container>
        <BigText>Discovery</BigText>

        <Selection>
          {genres.map((genre) => {
            return <option>{genre.title}</option>;
          })}
        </Selection>
      </Container>

      {/* <Song isPlaying={isPlaying} activeSong={activeSong} /> */}

      <DisplayList>
        {isFetching && <DancingBars />}

        {isError && <ResultsError />}

        {data?.map((song, i) => {
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
    </ColumnContainer>
  );
}

export default Discovery;
