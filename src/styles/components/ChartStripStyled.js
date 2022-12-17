import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../assets/common";

export const Container = styled.article`
  box-sizing: border-box;
  background: linear-gradient(
    -125deg,
    ${colors.darkPeach},
    ${colors.lightPeach}
  );
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.125rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    scale: 105%;
  }

  &:active {
    scale: 98%;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.backdrop};
  text-decoration: none;
`;

export const CoverArt = styled.img`
  height: 100%;
  width: 25%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
`;
