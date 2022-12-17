import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../assets/common";

export const Container = styled.article`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0 1rem;
`;

export const Box = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -0.25rem;
`;

export const LinkStyled = styled(Link)`
  color: ${colors.letters};
  letter-spacing: 1px;
  text-underline-offset: 3px;
`;

export const List = styled.div`
  display: flex;
  gap: 1rem;
`;
