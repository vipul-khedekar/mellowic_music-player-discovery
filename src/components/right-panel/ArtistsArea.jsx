import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import { BigText, SmallText } from "../../styles/Text";
import {
  Box,
  Heading,
  LinkStyled,
} from "../../styles/components/RightPanelStyled";
import { List } from "../../styles/components/ArtistAreaStyled";

function ArtistsArea() {
  return (
    <Box>
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
    </Box>
  );
}

export default ArtistsArea;
