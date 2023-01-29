import React from "react";
import Button from "../atoms/Buttons/DefaultButton";
import { PlusIcon } from "../../assets/images";

import { Pokemon } from '../../store/types';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { setPokemonModal } from '../../store/modalPokemonSlice';
import { setIsOpen, setIsEditing } from '../../store/stateSlice';

import * as S from "./styled";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const pokemonParty = useAppSelector(state => state.pokemonParty)
    return (
        <S.SideBarWrapper>
            <S.SideBarList>
                {pokemonParty.map((pokemon: Pokemon) => (
                    <S.SideBarItem onClick={() => {
                        dispatch(setPokemonModal(pokemon));
                        dispatch(setIsEditing(true));
                        dispatch(setIsOpen(true));
                    }}>
                        <img src={pokemon.image} alt="Imagem de um Pokemon" />
                    </S.SideBarItem>
                ))}
            </S.SideBarList>

            <Button icon={PlusIcon} text="" />
        </S.SideBarWrapper>
    )
};

export default Sidebar;
