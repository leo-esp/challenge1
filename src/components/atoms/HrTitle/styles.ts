import styled from "styled-components";
import { theme } from "../../../assets/styles/colors";

interface StyledProps {
  theme: typeof theme;
}

export const HrTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: ${(props: StyledProps) => props.theme.neutrals.neutral500};
  }

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9rem;
    color: ${(props: StyledProps) => props.theme.neutrals.neutral900};
  }
`;
