import { BigText, SmallText } from "../../styles/Text";
import {
  Box,
  Heading,
  LinkStyled,
} from "../../styles/components/RightPanelStyled";
import { List } from "../../styles/components/ChartAreaStyled";

import ChartStrip from "../cards/ChartStrip";

function ChartArea(props) {
  const { topCharts, data, isFetching, isError, isPlaying, activeSong } = props;

  return (
    <Box>
      <Heading>
        <BigText>Top Charts</BigText>

        <LinkStyled to={`/top-charts`}>
          <SmallText>See more...</SmallText>
        </LinkStyled>
      </Heading>

      <List>
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
