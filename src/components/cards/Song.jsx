import Temp from "../../assets/temp_placeholder.jpg";
import {
  Container,
  RelativeContainer,
  HoverMask,
  CoverArt,
  InfoContainer,
} from "../../styles/components/SongStyled";

function Song(props) {
  return (
    <Container>
      <RelativeContainer>
        <HoverMask />

        <CoverArt src={Temp} alt="cover-art" />
      </RelativeContainer>

      <InfoContainer>
        <p>Song Title yaydyaikskfnkasdfll</p>
        <p>Song Artists</p>
      </InfoContainer>
    </Container>
  );
}

export default Song;
