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

      <List>
        {topArtists?.map((artist, i) => {
          return <Artist key={i} i={i} artist={artist} />;
        })}
      </List>
    </Box>
  );
}

export default ArtistsArea;
