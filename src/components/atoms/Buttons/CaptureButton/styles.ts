import styled from "styled-components";
import { Pokeball } from "../../../../assets/images";

export const CaptureButton = styled.button`
  background-position: center;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  align-self: center;
  background-image: url(${Pokeball});
  width: 20%;
  aspect-ratio: 1 / 1;
  border: solid black 3px;

  img {
    width: 50px;
    height: 50px;
  }
`;
