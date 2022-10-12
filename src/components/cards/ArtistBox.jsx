import { Container, Image } from "../../styles/components/ArtistBoxStyled";
import { MidText } from "../../styles/Text";

function ArtistBox(props) {
  const { images, subtitle, artists } = props.artist;

  return (
    <Container to={`/artists/${artists[0].adamid}`}>
      <Image src={images?.background} alt="artist-headshot" />

      <MidText>{subtitle}</MidText>
    </Container>
  );
}

export default ArtistBox;
