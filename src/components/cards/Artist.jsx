import { Container, Headshot } from "../../styles/components/ArtistStyled";
import { MidText } from "../../styles/Text";

function Artist(props) {
  const { artists, images } = props.artist;
  console.log(artists, images);

  return (
    <Container>
      <Headshot src={images.background} alt="artist-headshot" />

      <MidText>{artists.alias}</MidText>
    </Container>
  );
}

export default Artist;
