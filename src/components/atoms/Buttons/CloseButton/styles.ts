import styled from "styled-components";
import { theme } from "../../../../assets/styles/colors";

interface StyledProps {
  theme: typeof theme;
}
export const CloseButton = styled.button`
  border-radius: 20px;
  width: 30px;
  height: 30px;
  background-color: ${(props: StyledProps) => props.theme.neutrals.neutral300};
  border: solid thin ${(props: StyledProps) => props.theme.neutrals.neutral500};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 75%;
  }
`;
