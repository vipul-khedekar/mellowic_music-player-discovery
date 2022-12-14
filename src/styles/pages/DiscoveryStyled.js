import styled from "styled-components";

import { colors, sizes, deviceSizes } from "../../assets/common";

export const ParentContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Selection = styled.select`
  background-color: ${colors.yellowish};
  padding: 0.125rem 0.25rem;
  border: none;
  border-radius: 0.125rem;
  color: ${colors.backdrop};
  font-size: ${sizes.medium};

  @media ${deviceSizes.mobileScreen} {
    font-size: ${sizes.small};
  }
`;
