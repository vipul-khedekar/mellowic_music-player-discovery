import { ColumnContainer } from "../styles/Container";
import { DisplayList } from "../styles/DisplayList";
import { Container, BigText, Selection } from "../styles/pages/DiscoveryStyled";

import { genres } from "../assets/constants";

function Discovery() {
  return (
    <ColumnContainer>
      <Container>
        <BigText>Discovery</BigText>

        <Selection>
          {genres.map((genre) => {
            return <option>{genre.title}</option>;
          })}
        </Selection>
      </Container>

      <DisplayList>
        {[1, 2, 3, 4, 5].map((song, i) => {
          return <p key={i}>{song}</p>;
        })}
      </DisplayList>
    </ColumnContainer>
  );
}

export default Discovery;
