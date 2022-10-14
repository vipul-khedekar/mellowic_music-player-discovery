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

import Artist from "../cards/Artist";

function ArtistsArea(props) {
  const { topArtists, isFetching, isError } = props;

  return (
    <Box>
      <Heading>
        <BigText>Top Artists</BigText>

        <LinkStyled to={`/top-artists`}>
          <SmallText>See more...</SmallText>
        </LinkStyled>
      </Heading>

      <Swiper
        slidesPerView="2.75"
        style={{ width: "100%" }}
        modules={[FreeMode]}
        freeMode
        centeredSlides
        centeredSlidesBounds
      >
        {topArtists?.map((artist, i) => {
          return (
            <SwiperSlide key={i} style={{ width: "12%", height: "auto" }}>
              <Artist i={i} artist={artist} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default ArtistsArea;
