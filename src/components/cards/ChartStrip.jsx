import { useDispatch } from "react-redux";

import { setActiveSong, playAndPause } from "../../store/features/player";

import { MidText, SmallText } from "../../styles/Text";
import {
  Container,
  CoverArt,
  TextContainer,
  LinkStyled,
} from "../../styles/components/ChartStripStyled";

import PlayAndPause from "../PlayAndPause";

function ChartStrip(props) {
  const dispatch = useDispatch();

  const { song, data, i, isPlaying, activeSong } = props;

  const handlePlay = () => {
    dispatch(playAndPause(true));
    dispatch(setActiveSong({ data, song, i }));
  };

  const handlePause = () => {
    dispatch(playAndPause(false));
  };

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
