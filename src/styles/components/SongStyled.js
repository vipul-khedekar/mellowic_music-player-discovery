import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, sizes } from "../../assets/common";

export const Container = styled.div`
  box-sizing: border-box;
  background: linear-gradient(60deg, ${colors.darkBerry}, ${colors.lightBerry});
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    scale: 105%;
    filter: brightness(110%);
  }

  &:active {
    scale: 95%;
  }
`;

export const RelativeContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;

  &:hover {
    filter: brightness(120%);
  }
`;

export const HoverMask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  &:hover {
    filter: brightness(125%);
  }
`;

export const CoverArt = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.125rem;
  object-fit: cover;
`;

export const LinkStyled = styled(Link)`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.25rem;
  color: ${colors.letters};
  white-space: nowrap;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: ${sizes.medium};
`;

export const ArtistName = styled.p`
  margin-top: -1rem;
  font-size: ${sizes.small};
`;
