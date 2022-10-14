import styled from "styled-components";

import { colors } from "../assets/common";

export const DisplayList = styled.div`
  box-sizing: border-box;
  height: 82.5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0.25rem;
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
