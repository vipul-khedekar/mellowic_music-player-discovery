import {
  Container,
  RelativeContainer,
  HoverMask,
} from "../../styles/components/SongStyled";

function Song(props) {
  return (
    <Container>
      <RelativeContainer>
        <HoverMask />
      </RelativeContainer>
    </Container>
  );
}

export default Song;
