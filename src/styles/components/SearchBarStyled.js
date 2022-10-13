import styled from "styled-components";
import { colors } from "../../assets/common";

export const Form = styled.form`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.75rem;
  position: relative;
`;

export const Input = styled.input`
  background-color: ${colors.backdrop};
  height: 30px;
  width: 100%;
  padding: 0.125rem 0.75rem;
  padding-left: 2rem;
  margin-top: 0.5rem;
  border: none;
  border-bottom: 0.125rem solid ${colors.orangish};
  border-radius: 0.125rem;
  outline: none;
  color: ${colors.letters};
  font-size: 1rem;
`;
