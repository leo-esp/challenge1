import styled from "styled-components";
import { theme } from "../../../assets/styles/colors";

interface StyledProps {
  theme: typeof theme;
}

export const PokeCircle = styled.div`
  border-radius: 50%;
  padding: -5px;
  border: solid 5px ${(props: StyledProps) => props.theme.primary};
  background-color: ${(props: StyledProps) => props.theme.neutrals.neutral300};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;

  width: 75%;
  aspect-ratio: 1 / 1;
`;

export const PokemonImage = styled.img`
  width: 100%;
`;

export const EmptyPokemon = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 60%;
  aspect-ratio: 1 / 1;
  position: relative;
  cursor: pointer;

  input {
    display: none;
  }

  img#cameraIcon {
    width: 100%;
  }

  div#plusIcon {
    position: absolute;
    background-color: ${(props: StyledProps) => props.theme.action};
    border-radius: 50%;
    border: solid 2px ${(props: StyledProps) => props.theme.neutrals.neutral300};
    display: flex;
    justify-content: center;
    align-items: center;
    left: 75%;
    top: 70%;
    width: 25%;
    height: 25%;

    img {
      width: 50%;
    }
  }
`;
