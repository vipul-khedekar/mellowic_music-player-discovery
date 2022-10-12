import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../assets/common";

export const Container = styled(Link)`
  box-sizing: border-box;
  background: linear-gradient(
    125deg,
    ${colors.darkPeach},
    ${colors.lightPeach}
  );
  height: 270px;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.125rem;
  color: ${colors.backdrop};
`;

export const Image = styled.img`
  height: 190px;
  width: 200px;
  border-radius: 0.125rem;
  object-fit: cover;
  filter: brightness(95%);

  &:hover {
    filter: brightness(125%);
  }
`;
