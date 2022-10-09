import styled from "styled-components";

import { colors } from "../../assets/common";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 0;
`;

export const Gradient = styled.div`
  height: 100px;
  width: 100%;
  background: linear-gradient(-65deg, ${colors.darkPeach}, transparent);
  opacity: 60%;
  position: absolute;
  z-index: 10;
`;

export const Image = styled.img`
  height: 125px;
  width: 125px;
  border: 0.25rem solid ${colors.lightPeach};
  border-radius: 9999px;
  object-fit: cover;
  position: absolute;
  z-index: 20;
  top: 0.5rem;
  left: 0.125rem;

  &:hover {
    filter: brightness(125%);
  }
`;

export const TextContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  z-index: 20;
  left: 9rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;
