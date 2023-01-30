import styled, { css } from "styled-components";
import { theme } from "assets/styles/colors";
type StyledProps = { theme: typeof theme };

const Container = css`
  padding: 1.5rem 0;
  display: flex;
`;

export const Modal = styled.div<{ isOpen: boolean }>`
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
  display: ${(props) => (props.isOpen ? "block" : "none")};
  overflow: hidden;

  @media only screen and (max-width: 450px) {
    padding-top: 0;
  }
`;

export const ModalContainer = styled.div`
  margin: auto;
  width: 25%;
  height: 80%;
  border-radius: 5px;
  overflow: auto;
  animation: animateBottom linear 0.1s;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props: StyledProps) => props.theme.primary};
  }

  @keyframes animateBottom {
    from {
      transform: translateY(50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
    padding-top: 0;
  }
`;

export const ModalHeader = styled.div`
  background-image: ${(props: StyledProps) => props.theme.primaryGradient};
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  border-radius: 5px;
  padding-top: 1rem;
  padding-bottom: 2rem;
  aspect-ratio: 1 / 0.5;

  button {
    position: absolute;
    top: 5%;
    right: 5%;
  }

  @media only screen and (max-width: 450px) {
    padding-top: 3rem;
  }
`;

export const ModalContent = styled.div`
  margin-top: -20px;
  border-radius: 20px 20px 5px 5px;
  padding: 10rem 1.5rem 7rem 1.5rem;
  background-color: ${(props: StyledProps) => props.theme.neutrals.neutral300};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media only screen and (max-width: 450px) {
    padding-top: 13rem;
  }
`;

export const BodyStatsContainer = styled.div`
  display: flex;
`;

export const TypeContainer = styled.div`
  ${Container}
  gap: 1.2rem;
  flex-direction: row;
  justify-content: center;
`;

export const AbilitiesContainer = styled.div`
  ${Container}
  flex-direction: row;
  justify-content: center;
  gap: 0.2rem;
`;

export const Abilities = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
`;

export const StatsContainer = styled.div`
  ${Container}
  flex-direction: column;
  gap: 0.6rem;
`;
