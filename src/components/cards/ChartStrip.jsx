import {
  Container,
  CoverArt,
  TextContainer,
} from "../../styles/components/ChartStripStyled";
import { MidText, SmallText } from "../../styles/Text";

import PlayAndPause from "../PlayAndPause";

function ChartStrip(props) {
  const { song, i, handlePlay, handlePause } = props;

  return (
    <Container>
      <CoverArt src={song?.images?.coverart} alt={song?.title || "cover-art"} />

      <TextContainer>
        <MidText style={{ overflow: "hidden", textOverflow: "hidden" }}>
          {song?.title.toUpperCase()}
        </MidText>

        <SmallText
          style={{
            marginTop: "-1rem",
            overflow: "hidden",
            textOverflow: "hidden",
          }}
        >
          {song?.subtitle.toUpperCase()}
        </SmallText>
      </TextContainer>

      <PlayAndPause />
    </Container>
  );
}

export default ChartStrip;
