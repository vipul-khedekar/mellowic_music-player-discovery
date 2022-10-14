import { useParams } from "react-router-dom";

import { useGetSongDetailsQuery } from "../store/services/shazamCore";

import { BigText, MidText } from "../styles/Text";
import { Container, LyricsContainer } from "../styles/pages/LyricsStyled";

import RippleEffect from "../components/loaders/RippleEffect";
import DetailsHeader from "../components/cards/DetailsHeader";

function Lyrics() {
  const songKey = useParams();

  const {
    data: songData,
    isFetching,
    isError,
  } = useGetSongDetailsQuery(songKey);

  return (
    <Container>
      <DetailsHeader songData={songData} />

      <LyricsContainer>
        <BigText>Lyrics:</BigText>

        {isFetching && <RippleEffect />}

        {isError && (
          <MidText>
            Something went wrong while fetch lyrics. Please try again...
          </MidText>
        )}

        {songData?.sections[1].type === "LYRICS" ? (
          songData?.sections[1].text.map((line, i) => {
            return <MidText>{line}</MidText>;
          })
        ) : (
          <MidText>Whoops! No lyrics available...</MidText>
        )}
      </LyricsContainer>
    </Container>
  );
}

export default Lyrics;
