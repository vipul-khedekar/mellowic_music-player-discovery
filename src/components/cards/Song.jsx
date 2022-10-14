import { useDispatch } from "react-redux";

import { playAndPause, setActiveSong } from "../../store/features/player";

import {
  Container,
  RelativeContainer,
  HoverMask,
  CoverArt,
  InfoContainer,
  Title,
  ArtistName,
} from "../../styles/components/SongStyled";

import PlayAndPause from "../PlayAndPause";

function Song(props) {
  const dispatch = useDispatch();

  const { song, data, isPlaying, activeSong, i } = props;

  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playAndPause(true));
  };

  const handlePause = () => {
    dispatch(playAndPause(false));
  };

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
        <Title>{song.title}</Title>

        <ArtistName>{song.subtitle}</ArtistName>
      </InfoContainer>
    </Container>
  );
}

export default Song;
