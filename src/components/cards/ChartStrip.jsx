import { useDispatch } from "react-redux";
import {
  Container,
  CoverArt,
  TextContainer,
  LinkStyled,
} from "../../styles/components/ChartStripStyled";
import { MidText, SmallText } from "../../styles/Text";

import PlayAndPause from "../PlayAndPause";
// import { PlayAndPause } from "../PlayAndPause";
import { setActiveSong, playAndPause } from "../../store/features/player";

function ChartStrip(props) {
  const { song, data, i, isPlaying, activeSong } = props;

  const dispatch = useDispatch();

  function handlePlay() {
    dispatch(playAndPause(true));
    dispatch(setActiveSong({ data, song, i }));
  }

  function handlePause() {
    dispatch(playAndPause(false));
  }

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
        activeSong={activeSong}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
    </Container>
  );
}

export default ChartStrip;
