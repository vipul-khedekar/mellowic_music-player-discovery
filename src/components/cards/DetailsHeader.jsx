import DefaultImage from "../../assets/default-image.jpg";

import { VeryBigText, BigText, SmallText } from "../../styles/Text";
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
          artistData?.artists[artistKey]?.attributes?.artwork?.url
            .replace("{h}", "500")
            .replace("{w}", "500") ||
          DefaultImage
        }
        alt="cover-image"
      />

      <TextContainer>
        <VeryBigText style={{ whiteSpace: "nowrap" }}>
          {songData?.title || artistData?.artists[artistKey]?.attributes?.name}
        </VeryBigText>

        <BigText style={{ margin: "-1rem 0", whiteSpace: "nowrap" }}>
          {songData?.subtitle || ""}
        </BigText>

        <SmallText style={{ whiteSpace: "nowrap" }}>
          {songData?.genres.primary ||
            artistData?.artists[artistKey]?.attributes?.genreNames[0]}
        </SmallText>
      </TextContainer>
    </Container>
  );
}

export default DetailsHeader;
