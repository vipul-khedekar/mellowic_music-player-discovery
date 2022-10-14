import styled from "styled-components";

import { colors } from "../assets/common";

export const DisplayList = styled.div`
  height: 83vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0.5rem 0 0;
  overflow: scroll;

  //Custom scrollbar (Firefox and Edge doesn't support)
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.yellowish};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.yellowish};
    filter: brightness(60%);
  }
`;
