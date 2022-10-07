import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors, deviceSizes } from "../../assets/common";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 150px;
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

  @media ${deviceSizes.tabletScreen} {
    width: 80px;
  }

  @media ${deviceSizes.mobileScreen} {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -10px;

  @media ${deviceSizes.tabletScreen} {
    margin-left: 0;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 80px;
  margin-bottom: -0.5rem;
  object-fit: cover;
`;

export const LogoText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondaryText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${deviceSizes.tabletScreen} {
    display: none;
  }

  @media ${deviceSizes.mobileScreen} {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  @media ${deviceSizes.tabletScreen} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-top: 3rem;
  }
`;

export const NavLinkStrip = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  margin-left: 10px;
  text-decoration: none;
  color: ${colors.backdrop};

  @media ${deviceSizes.tabletScreen} {
    display: flex;
    transform: rotate(-90deg);
  }

  &:hover {
    width: 100%;
    background-color: ${colors.lightPeach};
    scale: 110%;
  }
`;
