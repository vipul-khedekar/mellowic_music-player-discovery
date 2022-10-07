import styled from "styled-components";

import { colors, sizes } from "../../assets/common";

export const Container = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    125deg,
    ${colors.darkBerry},
    ${colors.lightBerry}
  );
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.5rem;
  opacity: 75%;
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
    opacity: 65%;
  }
`;

export const CoverArt = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.125rem;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.25rem;
  white-space: nowrap;
  overflow: hidden;

  p {
    margin: 0.125rem 0.25rem;

    &:nth-child(2) {
      font-size: ${sizes.small};
    }
  }
`;
