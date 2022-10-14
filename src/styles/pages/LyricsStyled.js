import styled from "styled-components";

import { deviceSizes } from "../../assets/common";

export const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${deviceSizes.tabletScreen} {
    width: 30vw;
  }
`;

export const LyricsContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
`;
