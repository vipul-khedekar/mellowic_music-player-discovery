import styled from "styled-components";

import { colors, sizes, miscSizes } from "../../assets/common";

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
  padding: ${miscSizes.small} ${miscSizes.medium};
  border: none;
  border-radius: ${miscSizes.small};
  color: ${colors.letters};
  font-size: ${sizes.medium};
`;
