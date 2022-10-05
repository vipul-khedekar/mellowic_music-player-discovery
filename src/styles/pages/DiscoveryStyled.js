import styled from "styled-components";

import { colors, sizes, deviceSizes } from "../../assets/common";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BigText = styled.h2`
  font-weight: bold;
  font-size: ${sizes.xlarge};
`;

export const Selection = styled.select`
  background-color: ${colors.orangish};
  padding: 0.125rem 0.25rem;
  border: none;
  border-radius: 0.125rem;
  color: ${colors.letters};
  font-size: ${sizes.medium};

  @media ${deviceSizes.mobileScreen} {
    font-size: ${sizes.small};
  }
`;
