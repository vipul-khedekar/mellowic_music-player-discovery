import styled from "styled-components";
import { deviceSizes } from "../assets/common";

export const Layout = styled.main`
  display: flex;
  gap: 1rem;
`;

export const MiddlePanel = styled.section`
  height: 100vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media ${deviceSizes.tabletScreen} {
    width: 40vw;
  }
`;
