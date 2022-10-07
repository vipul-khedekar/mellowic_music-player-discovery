import { useDispatch } from "react-redux";

import Temp from "../../assets/temp_placeholder.jpg";
import {
  Container,
  RelativeContainer,
  HoverMask,
  CoverArt,
  InfoContainer,
} from "../../styles/components/SongStyled";
import { playAndPause, setActiveSong } from "../../store/features/player";

import PlayAndPause from "../PlayAndPause";

function Song(props) {
  const { song, data, isPlaying, activeSong, i } = props;

  const dispatch = useDispatch();

  function handlePlay() {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playAndPause(true));
  }

  function handlePause() {
    dispatch(playAndPause(false));
  }

  return (
    <Container>
      <RelativeContainer>
        <HoverMask>
          <PlayAndPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlay={handlePlay}
            handlePause={handlePause}
          />
        </HoverMask>

        <CoverArt src={song.images?.coverart} alt="cover-art" />
      </RelativeContainer>

      <InfoContainer>
        <p>{song.title}</p>
        <p>{song.subtitle}</p>
      </InfoContainer>
    </Container>
  );
}

export default Song;
