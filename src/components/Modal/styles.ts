import styled from "styled-components";
import { Props as ModalProps } from "./index";
import { theme } from "../../assets/styles/colors";
type StyledModalProps = ModalProps & { theme: typeof theme };

export const Modal = styled.div<ModalProps>`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
export const ModalContent = styled.div`
  margin: auto;
  border-radius: 5px;
  padding: 20px;
  width: 25%;
  background-image: ${(props: StyledModalProps) => props.theme.primaryGradient};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const PokemonCircle = styled.div``;
export const CloseButton = styled.button``;
