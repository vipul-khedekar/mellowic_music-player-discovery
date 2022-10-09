import {
  Container,
  Gradient,
  Image,
  TextContainer,
} from "../../styles/components/DetailsHeaderStyled";
import { BigText, MidText, SmallText } from "../../styles/Text";

import DefaultImage from "../../assets/default-image.jpg";

function DetailsHeader(props) {
  const { songData } = props;

  return (
    <Container>
      <Gradient />

      <Image
        src={songData?.images?.coverart || DefaultImage}
        alt="cover-image"
      />

      <TextContainer>
        <BigText style={{ whiteSpace: "nowrap" }}>{songData?.title}</BigText>

        <MidText style={{ margin: "-0.5rem 0", whiteSpace: "nowrap" }}>
          {songData?.subtitle}
        </MidText>

        <SmallText style={{ whiteSpace: "nowrap" }}>
          {songData?.genres.primary}
        </SmallText>
      </TextContainer>
    </Container>
  );
}

export default DetailsHeader;
