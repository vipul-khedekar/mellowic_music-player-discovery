import { useParams } from "react-router-dom";

import { useGetSongDetailsQuery } from "../store/services/shazamCore";

import { ColumnContainer } from "../styles/Container";
import { BigText, MidText } from "../styles/Text";
import { LyricsContainer } from "../styles/pages/LyricsStyled";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import DetailsHeader from "../components/cards/DetailsHeader";

function Lyrics() {
  const songKey = useParams();

  const {
    data: songData,
    isFetching,
    isError,
  } = useGetSongDetailsQuery(songKey);

  return (
    <ColumnContainer>
      <DetailsHeader songData={songData} />

      <LyricsContainer>
        <BigText>Lyrics:</BigText>

        {songData?.sections[1].type === "LYRICS" ? (
          songData?.sections[1].text.map((line, i) => {
            return <MidText>{line}</MidText>;
          })
        ) : (
          <MidText>Whoops! No lyrics available...</MidText>
        )}
      </LyricsContainer>
    </ColumnContainer>
  );
}

export default Lyrics;
