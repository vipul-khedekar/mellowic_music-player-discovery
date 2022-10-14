import { useGetTopChartsQuery } from "../store/services/shazamCore";

import { DisplayList } from "../styles/DisplayList";
import { VeryBigText } from "../styles/Text";
import { Container } from "../styles/pages/TopArtistsStyled";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import ArtistBox from "../components/cards/ArtistBox";

function Discovery() {
  const { data: artists, isFetching, isError } = useGetTopChartsQuery();

  return (
    <Container>
      <VeryBigText>Top Artists</VeryBigText>

      <DisplayList>
        {isFetching && <DancingBars />}

        {isError && <ResultsError />}

        {artists?.map((artist) => {
          return <ArtistBox key={artist.key} artist={artist} />;
        })}
      </DisplayList>
    </Container>
  );
}

export default Discovery;
