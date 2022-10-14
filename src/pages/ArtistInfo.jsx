import { useParams } from "react-router-dom";

import { useGetArtistDetailsQuery } from "../store/services/shazamCore";

import { Container } from "../styles/pages/ArtistInfoStyled";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import DetailsHeader from "../components/cards/DetailsHeader";

function ArtistInfo() {
  const artistKey = useParams();

  const {
    data: artistData,
    isFetching,
    isError,
  } = useGetArtistDetailsQuery(artistKey);

  return (
    <Container>
      <DetailsHeader artistData={artistData} artistKey={artistKey.key} />
    </Container>
  );
}

export default ArtistInfo;
