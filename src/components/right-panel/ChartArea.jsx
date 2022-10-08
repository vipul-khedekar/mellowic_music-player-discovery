import { BigText, SmallText } from "../../styles/Text";
import {
  Box,
  Heading,
  LinkStyled,
} from "../../styles/components/RightPanelStyled";
import { List } from "../../styles/components/ChartAreaStyled";

function ChartArea() {
  return (
    <Box>
      <Heading>
        <BigText>Top Charts</BigText>

        <LinkStyled to={`/top-charts`}>
          <SmallText>See more...</SmallText>
        </LinkStyled>
      </Heading>

      <List>
        {[1, 2, 3, 4, 5].map((song) => {
          return <p>{song}</p>;
        })}
      </List>
    </Box>
  );
}

export default ChartArea;
