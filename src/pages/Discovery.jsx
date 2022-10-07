import { ColumnContainer } from "../styles/Container";
import { DisplayList } from "../styles/DisplayList";
import { Container, BigText, Selection } from "../styles/pages/DiscoveryStyled";

import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../store/services/shazamCore";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import Song from "../components/cards/Song";

function Discovery() {
  // const { data, isFetching, isError } = useGetTopChartsQuery();

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

      <Song />
      <Song />
      <Song />

      {/* <DisplayList>
        {isFetching && <DancingBars />}

        {isError && <ResultsError />}

        {data?.map((song, i) => {
          return <Song key={song.key} song={song} i={i} />;
        })}
      </DisplayList> */}
    </ColumnContainer>
  );
}

export default Discovery;
