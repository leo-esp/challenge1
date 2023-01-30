import styled from "styled-components";
import { theme } from "../../assets/styles/colors";
type LiStyledProps = { filled?: boolean; theme: typeof theme };
export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SideBarItem = styled.li<LiStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 4px solid
    ${(props: LiStyledProps) =>
      props.filled ? props.theme.primary : props.theme.primaryDark};
  border-radius: 12.8rem;
  font-size: 2rem;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props: LiStyledProps) =>
    props.filled ? "#fff" : "#00d68f"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-color: #004a45;
    color: #00d68f;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;
