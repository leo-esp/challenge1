import styled, { css } from "styled-components";
import { theme } from "../../../../assets/styles/colors";
const disabledStyle = css`
  background-color: ${(props: { theme: typeof theme }) =>
    props.theme.neutrals.neutral500};
  border-color: ${(props: { theme: typeof theme }) =>
    props.theme.neutrals.neutral500};
  cursor: not-allowed;
  &:hover {
    background-color: ${(props: { theme: typeof theme }) =>
      props.theme.neutrals.neutral500};
  }
`;
export const ButtonWrapper = styled.button`
  padding: 1rem 2rem;
  background-color: #ff3d71;
  border: 1px solid #ff3d71;
  border-radius: 42px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  width: fit-content;
  align-self: center;
  /* position: fixed; */
  /* bottom: 5%; */

  &.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border: 4px solid #db2c66;
  }

  &:hover {
    background-color: #db2c66;
  }

  ${(props) => props.disabled && disabledStyle}
`;

export const Icon = styled.img``;

export const Text = styled.span``;
