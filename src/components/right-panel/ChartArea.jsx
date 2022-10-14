import { VeryBigText, MidText, SmallText } from "../../styles/Text";
import { List } from "../../styles/components/ChartAreaStyled";
import {
  Box,
  Heading,
  LinkStyled,
} from "../../styles/components/RightPanelStyled";

import RippleEffect from "../loaders/RippleEffect";
import ChartStrip from "../cards/ChartStrip";

function ChartArea(props) {
  const { topCharts, data, isFetching, isError, isPlaying, activeSong } = props;

  return (
    <Box>
      <Heading>
        <VeryBigText>Top 5 Songs</VeryBigText>

        <LinkStyled to={`/top-charts`}>
          <SmallText>See more...</SmallText>
        </LinkStyled>
      </Heading>

      <List>
        {isFetching && <RippleEffect />}

        {isError && (
          <MidText>
            Something went wrong when fetching top songs. Please try again...
          </MidText>
        )}

        {topCharts?.map((song, i) => {
          return (
            <ChartStrip
              key={i}
              i={i}
              song={song}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          );
        })}
      </List>
    </Box>
  );
}

export default ChartArea;
