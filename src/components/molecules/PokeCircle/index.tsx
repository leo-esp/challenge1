import React from "react";
import * as S from "./styles";
import cameraImage from "../../../assets/images/camera.png";
import plusImage from "../../../assets/images/plus.png";

export interface Props {
  pokemonImage?: string;
}

const PokeCircle: React.FC<Props> = ({ pokemonImage }) => {
  return (
    <S.PokeCircle>
      {!pokemonImage && (
        <S.EmptyPokemon>
          <img id="cameraIcon" src={cameraImage} alt="Ícone de Camêra" />
          <div id="plusIcon">
            <img src={plusImage} alt="Ícone do sinal de mais" />
          </div>
        </S.EmptyPokemon>
      )}
      {pokemonImage && (
        <S.PokemonImage src={pokemonImage} alt="Imagem de um pokemon" />
      )}
    </S.PokeCircle>
  );
};

export default PokeCircle;
