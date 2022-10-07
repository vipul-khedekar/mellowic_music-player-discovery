import styled from "styled-components";

import { colors } from "../../assets/common";

export const Container = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    125deg,
    ${colors.darkBerry},
    ${colors.lightBerry}
  );
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.125rem;
  padding: 1rem;
  opacity: 65%;
  cursor: pointer;
`;

export const RelativeContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
`;

export const HoverMask = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  &:hover {
    background-color: ${colors.darkBerry};
    border-radius: 0.125rem;
    opacity: 50%;
  }
`;
