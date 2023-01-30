import React from "react";
import Button from "../atoms/Buttons/DefaultButton";
import { PlusIcon } from "../../assets/images";

import { Pokemon } from "../../store/types";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import { setPokemonModal } from "../../store/modalPokemonSlice";
import { setIsOpen, setIsEditing, setIsCreating } from "../../store/stateSlice";

import * as S from "./styles";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const pokemonParty = useAppSelector((state) => state.pokemonParty);
  const isPartyFull = pokemonParty.length > 5;
  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {pokemonParty.map((pokemon: Pokemon, i) => (
          <S.SideBarItem
            key={i}
            filled
            onClick={() => {
              dispatch(setPokemonModal(pokemon));
              dispatch(setIsEditing(true));
              dispatch(setIsOpen(true));
            }}
          >
            <img src={pokemon.image} alt="Imagem de um Pokemon" />
          </S.SideBarItem>
        ))}
        {[...Array(6 - pokemonParty.length).keys()].map((i) => (
          <S.SideBarItem key={i}>?</S.SideBarItem>
        ))}
      </S.SideBarList>

      <Button
        icon={PlusIcon}
        onClick={() => {
          if (isPartyFull) return;
          dispatch(setIsCreating(true));
          dispatch(setIsOpen(true));
        }}
      />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
