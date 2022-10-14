import { useParams } from "react-router-dom";

import { useGetArtistDetailsQuery } from "../store/services/shazamCore";

import { MidText } from "../styles/Text";
import { Container } from "../styles/pages/ArtistInfoStyled";

import RippleEffect from "../components/loaders/RippleEffect";
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
      {isFetching && <RippleEffect />}

      {isError && (
        <MidText>
          Something went wrong while fetching data. Please try again.
        </MidText>
      )}

      <DetailsHeader artistData={artistData} artistKey={artistKey.key} />
    </Container>
  );
}

export default ArtistInfo;
