import { ColumnContainer } from "../styles/Container";
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
    </ColumnContainer>
  );
}

export default Discovery;
