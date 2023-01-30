import styled from "styled-components";
import { theme } from "../../../assets/styles/colors";

interface StyledProps {
  theme: typeof theme;
}
export const PokeName = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
  }
`;

export const EditIcon = styled.img`
  width: 1.2rem;
  margin-left: 1.2rem;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: transparent;

  input {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
    border-color: ${(props: StyledProps) => props.theme.neutrals.neutral500};
    color: ${(props: StyledProps) => props.theme.neutrals.neutral700};
    font-size: 0.8rem;
  }
`;

export const ActionButton = styled.button`
  background-color: ${(props: StyledProps) => props.theme.neutrals.neutral300};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: solid thin ${(props: StyledProps) => props.theme.neutrals.neutral500};
  aspect-ratio: 1 / 1;
  height: 2.2rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  img {
    width: 0.8rem;
  }
`;
