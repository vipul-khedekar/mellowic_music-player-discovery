import { Container, Headshot } from "../../styles/components/ArtistStyled";

function Artist(props) {
  const { artists, images } = props.artist;

  return (
    <Container to={`/artists/${artists[0].adamid}`}>
      <Headshot src={images.background} alt="artist-headshot" />
    </Container>
  );
}

export default Artist;
