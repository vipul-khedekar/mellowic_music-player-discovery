import { useParams } from "react-router-dom";

import { LyricsContainer } from "../styles/pages/LyricsStyled";
import { ColumnContainer } from "../styles/Container";
import { BigText, MidText } from "../styles/Text";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";

function Lyrics() {
  const songKey = useParams();

  return (
    <ColumnContainer>
      <LyricsContainer>
        <BigText>Lyrics:</BigText>

        <MidText>Song lyrics lines</MidText>
      </LyricsContainer>
    </ColumnContainer>
  );
}

export default Lyrics;
