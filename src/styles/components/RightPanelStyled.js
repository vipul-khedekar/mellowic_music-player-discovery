import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../assets/common";

export const Container = styled.article`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 1rem 0;
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
