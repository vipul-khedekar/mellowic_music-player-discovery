import {
  IoAnalyticsOutline,
  IoNavigate,
  IoStarHalf,
  IoGlassesSharp,
} from "react-icons/io5";

import LogoImage from "../assets/logo.png";

import { MidText, SmallText } from "../styles/Text";
import {
  Container,
  LogoContainer,
  Logo,
  LogoText,
  SecondaryText,
  OptionsContainer,
  LinkStrip,
  ColumnContainer,
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
        <LinkStrip to={`/`}>
          <IoNavigate size={20} />

          <MidText>Discovery</MidText>
        </LinkStrip>

        <LinkStrip to={`/top-charts`}>
          <IoAnalyticsOutline size={20} />

          <MidText>Top Charts</MidText>
        </LinkStrip>

        <LinkStrip to={`/top-artists`}>
          <IoStarHalf size={20} />

          <MidText>Top Artists</MidText>
        </LinkStrip>

        <LinkStrip to={`/around-you`}>
          <IoGlassesSharp size={20} />

          <ColumnContainer>
            <MidText>Around You</MidText>
            <SmallText style={{ marginTop: "-1rem" }}>
              (Location Based)
            </SmallText>
          </ColumnContainer>
        </LinkStrip>
      </OptionsContainer>
    </Container>
  );
}

export default SidePanel;
