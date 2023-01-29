import styled from "styled-components";

export const InputNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const InputContent = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  background: #ffffff;
  border: 2px solid #e4e9f2;
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

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputSuffix = styled.span`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 700;
  font-size: 0.8rem;
  color: #2e3a59;
`;
export const InputActions = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e4e9f2;
`;

export const Arrow = styled.img`
  transition: all 0.2s;

  &:hover {
    background-color: #c5cef4;
    cursor: pointer;
  }

  &.increase {
    transform: rotate(180deg);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 0.4rem;
`;
