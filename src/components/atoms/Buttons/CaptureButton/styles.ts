import styled from "styled-components";
import { Pokeball } from "../../../../assets/images";

export const CaptureButton = styled.button`
  align-self: center;
  aspect-ratio: 1 / 1;
  background-image: url(${Pokeball});
  background-position: center;
  background-size: 150%;
  border-radius: 50%;
  border: none;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 5rem;
  position: fixed;
  bottom: 20%;

  @media only screen and (max-width: 450px) {
    width: 20%;
    bottom: 5%;
  }
`;
