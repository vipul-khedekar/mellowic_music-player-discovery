import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import { BigText, SmallText } from "../../styles/Text";
import {
  Container,
  Heading,
  LinkStyled,
  List,
} from "../../styles/components/ArtistAreaStyled";

function ArtistsArea() {
  return (
    <Container>
      <Heading>
        <BigText>Top Artists</BigText>

        <LinkStyled to={`/top-artists`}>
          <SmallText>See more...</SmallText>
        </LinkStyled>
      </Heading>

      <List>
        {[1, 2, 3, 4, 5].map((artist) => {
          return <p>{artist}</p>;
        })}
      </List>
    </Container>
  );
}

export default ArtistsArea;
