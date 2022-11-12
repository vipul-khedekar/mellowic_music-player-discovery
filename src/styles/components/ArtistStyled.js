import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: grab;
`;

export const Headshot = styled.img`
  height: auto;
  width: 120px;
  border-radius: 9999px;
  opacity: 95%;
  cursor: grab;
`;
