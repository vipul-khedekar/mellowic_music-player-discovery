import {
  Container,
  CoverArt,
  TextContainer,
  LinkStyled,
} from "../../styles/components/ChartStripStyled";
import { MidText, SmallText } from "../../styles/Text";

import PlayAndPause from "../PlayAndPause";

function ChartStrip(props) {
  const { song, i, isPlaying, activeSongs, handlePlay, handlePause } = props;

  return (
    <Container>
      <LinkStyled to={`/songs/${song.key}`}>
        <CoverArt
          src={song?.images?.coverart}
          alt={song?.title || "cover-art"}
        />

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
      </LinkStyled>

      <PlayAndPause
        song={song}
        isPlaying={isPlaying}
        activeSongs={activeSongs}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
    </Container>
  );
}

export default ChartStrip;
