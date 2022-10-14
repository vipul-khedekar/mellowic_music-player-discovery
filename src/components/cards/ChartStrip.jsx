import { useDispatch } from "react-redux";

import { setActiveSong, playAndPause } from "../../store/features/player";

import { BigText, MidText } from "../../styles/Text";
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
          <BigText style={{ overflow: "hidden", textOverflow: "hidden" }}>
            {song?.title.toUpperCase()}
          </BigText>

          <MidText
            style={{
              marginTop: "-1.5rem",
              overflow: "hidden",
              textOverflow: "hidden",
            }}
          >
            {song?.subtitle.toUpperCase()}
          </MidText>
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
