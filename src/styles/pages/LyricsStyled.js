import styled from "styled-components";

import { deviceSizes } from "../../assets/common";

export const Container = styled.article`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${deviceSizes.tabletScreen} {
    width: 30vw;
  }
`;

export const LyricsContainer = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
`;
