import { useState } from "react";
import { IoAnalyticsOutline, IoNavigate, IoStarHalf } from "react-icons/io5";

import LogoImage from "../assets/logo.png";
import {
  Container,
  LogoContainer,
  Logo,
  LogoText,
  SecondaryText,
  OptionsContainer,
  NavLinkStrip,
} from "../styles/components/SideBarStyled";

function SidePanel() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoImage} alt="logo" />

        <div>
          <LogoText>Mellowic</LogoText>
          <SecondaryText>Music Player</SecondaryText>
        </div>
      </LogoContainer>

      <OptionsContainer>
        <NavLinkStrip to={`/`}>
          <IoNavigate size={20} />
          <p>Discovery</p>
        </NavLinkStrip>

        <NavLinkStrip to={`/top-artists`}>
          <IoStarHalf size={20} />
          <p>Top Artists</p>
        </NavLinkStrip>

        <NavLinkStrip to={`/top-charts`}>
          <IoAnalyticsOutline size={20} />
          <p>Top Charts</p>
        </NavLinkStrip>
      </OptionsContainer>
    </Container>
  );
}

export default SidePanel;
