import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, deviceSizes } from "../../assets/common";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 180px;
  background: linear-gradient(
    105deg,
    ${colors.darkPeach},
    ${colors.lightPeach}
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0;
  color: ${colors.backdrop};
`;

export const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
  color: ${colors.backdrop};
  text-decoration: none;
`;

export const Logo = styled.img`
  height: auto;
  width: 80px;
  margin-bottom: -1.5rem;
  object-fit: cover;
`;

export const LogoText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--righteous);
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
`;

export const SecondaryText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -1.25rem;
  font-family: var(--righteous);
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;

  @media ${deviceSizes.tabletScreen} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-top: 3rem;
  }
`;

export const LinkStrip = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.125rem;
  margin-left: 10px;
  text-decoration: none;
  color: ${colors.backdrop};

  &:hover {
    width: 100%;
    background-color: ${colors.lightPeach};
    scale: 110%;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
