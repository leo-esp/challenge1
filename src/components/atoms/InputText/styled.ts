import styled from "styled-components";

export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const Input = styled.input`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem 0.8rem;
  background: #ffffff;
  border: thin solid #e4e9f2;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:focus,
  &:active {
    border-color: #598bff;
  }

  &::placeholder {
    color: #c5cef4;
    font-weight: 400;
  }
`;
