import styled from "styled-components";
import { theme } from "../../../assets/styles/colors";
import { Props as TypeLabelProps } from "./index";
type StyledProps = TypeLabelProps & {
  theme: typeof theme;
};

export const TypeLabel = styled.div<TypeLabelProps>`
  background-color: ${(props: StyledProps) => props.theme.type[props.type]};
  border-radius: 50px;
  padding: 0.5rem 1rem;
  max-width: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props: StyledProps) => props.theme.neutrals.neutral100};
    font-size: 0.8rem;
  }
`;
