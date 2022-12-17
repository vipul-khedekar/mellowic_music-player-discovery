import { MidText } from "../../styles/Text";
import { Container, Image } from "../../styles/components/ArtistBoxStyled";

function ArtistBox(props) {
  const { images, subtitle, artists } = props.artist;

  return (
    <>
      {artists ? (
        <Container to={`/artists/${artists[0].adamid}`}>
          <Image src={images?.background} alt="artist-headshot" />

          <MidText>{subtitle}</MidText>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default ArtistBox;
