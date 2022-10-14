import DefaultImage from "../../assets/default-image.jpg";

import { BigText, MidText, SmallText } from "../../styles/Text";
import {
  Container,
  Gradient,
  Image,
  TextContainer,
} from "../../styles/components/DetailsHeaderStyled";

function DetailsHeader(props) {
  const { songData, artistData, artistKey } = props;

  return (
    <Container>
      <Gradient />

      <Image
        src={
          songData?.images?.coverart ||
          artistData?.artists[artistKey].attributes?.artwork?.url
            .replace("{h}", "500")
            .replace("{w}", "500") ||
          DefaultImage
        }
        alt="cover-image"
      />

      <TextContainer>
        <BigText style={{ whiteSpace: "nowrap" }}>
          {songData?.title || artistData?.artists[artistKey].attributes?.name}
        </BigText>

        <MidText style={{ margin: "-0.5rem 0", whiteSpace: "nowrap" }}>
          {songData?.subtitle || ""}
        </MidText>

        <SmallText style={{ whiteSpace: "nowrap" }}>
          {songData?.genres.primary ||
            artistData?.artists[artistKey].attributes?.genreNames[0]}
        </SmallText>
      </TextContainer>
    </Container>
  );
}

export default DetailsHeader;
