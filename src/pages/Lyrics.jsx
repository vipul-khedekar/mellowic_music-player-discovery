import { useParams } from "react-router-dom";

import { useGetSongDetailsQuery } from "../store/services/shazamCore";

import { LyricsContainer } from "../styles/pages/LyricsStyled";
import { ColumnContainer } from "../styles/Container";
import { BigText, MidText } from "../styles/Text";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";

function Lyrics() {
  const songKey = useParams();

  const { data, isFetching, isError } = useGetSongDetailsQuery(songKey);

  return (
    <ColumnContainer>
      <LyricsContainer>
        <BigText>Lyrics:</BigText>

        {data?.sections[1].type === "LYRICS" ? (
          data?.sections[1].text.map((line, i) => {
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
