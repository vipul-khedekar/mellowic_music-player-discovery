import styled from "styled-components";

import { colors } from "../../assets/common";

export const Container = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    -125deg,
    ${colors.darkPeach},
    ${colors.lightPeach}
  );
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.125rem;
`;

export const CoverArt = styled.img`
  height: 100%;
  width: 20%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
`;
