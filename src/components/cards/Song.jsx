import Temp from "../../assets/temp_placeholder.jpg";
import {
  Container,
  RelativeContainer,
  HoverMask,
  CoverArt,
  InfoContainer,
} from "../../styles/components/SongStyled";

import PlayAndPause from "../PlayAndPause";

function Song(props) {
  const { song, data, isPlaying, activeSong, i } = props;

  function handlePlay() {}

  function handlePause() {}

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
