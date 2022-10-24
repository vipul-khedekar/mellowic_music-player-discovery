import styled from "styled-components";

import { deviceSizes } from "../../assets/common";

export const Container = styled.article`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${deviceSizes.tabletScreen} {
    width: 30vw;
  }
`;
