import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
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

export const DropdownContent = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  font-weight: 400;
  font-size: 0.8rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  background: #ffffff;
  border: 2px solid #e4e9f2;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  appearance: none;
  color: #c5cef4;

  &:focus,
  &:active {
    border-color: #598bff;
  }
`;

export const DropdownOption = styled.option`
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #c5cef4;
`;

export const DropdownIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 0.2rem;
  transform: translateY(-50%);
  width: 1.5rem;
  height: auto;
  pointer-events: none;
`;
