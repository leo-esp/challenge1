import React, { ChangeEventHandler } from "react";
import * as S from "./styles";
import { PlusIcon, CameraIcon } from "../../../assets/images";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { setPokemonImageModal } from "../../../store/modalPokemonSlice";

export interface Props {
  pokemonImage?: string;
}

const PokeCircle: React.FC<Props> = ({ pokemonImage }) => {
  const dispatch = useAppDispatch();
  const { isCreating } = useAppSelector((state) => state.appState);
  const modalPokemon = useAppSelector((state) => state.modalPokemon);
  return (
    <S.PokeCircle>
      {isCreating && !modalPokemon && (
        <S.EmptyPokemon htmlFor="addFile">
          <img id="cameraIcon" src={CameraIcon} alt="Ícone de Camêra" />
          <div id="plusIcon">
            <img src={PlusIcon} alt="Ícone do sinal de mais" />
          </div>
          <input
            type="file"
            id="addFile"
            onChange={(e: ChangeEventHandler<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                let img = e.target.files[0];
                console.log(e.target.files[0]);
                console.log("------------------------------------");
                console.log(URL.createObjectURL(img));
                dispatch(setPokemonImageModal(URL.createObjectURL(img)));
              }
            }}
          />
        </S.EmptyPokemon>
      )}
      {modalPokemon && (
        <S.PokemonImage src={modalPokemon?.image} alt="Imagem de um pokemon" />
      )}
    </S.PokeCircle>
  );
};

export default PokeCircle;
