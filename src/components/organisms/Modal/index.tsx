import React from "react";
import * as S from "./styles";
import {
    BodyStats,
    translatedBodyStats,
    Stats,
} from "../../../store/types";
import CloseButton from "../../atoms/Buttons/CloseButton";
import PokeCircle from "../../molecules/PokeCircle";
import PokeName from "../../molecules/PokeName";
import PokeStats from "../../molecules/PokeStats";
import HrTitle from "../../atoms/HrTitle";
import TypeLabel from "../../atoms/TypeLabel";
import Button from "../../atoms/Buttons/DefaultButton";
import CaptureButton from "../../atoms/Buttons/CaptureButton";
import PokeForm from "../PokeForm";

import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { addPokemonToParty } from "../../../store/pokemonPartySlice";
import { setIsAppearing, setIsOpen } from "../../../store/stateSlice";
import { setPokemonModal } from "../../../store/modalPokemonSlice";

const Modal: React.FunctionComponent = () => {
    const modalPokemon = useAppSelector((state) => state.modalPokemon);
    const isPartyFull = useAppSelector((state) => state.pokemonParty.length > 5);
    const { isCreating, isAppearing, isOpen } = useAppSelector((state) => state.appState);
    const dispatch = useAppDispatch();
    return (
        <S.Modal isOpen={isOpen}>
            <S.ModalContainer>
                <S.ModalHeader>
                    {modalPokemon && (
                        <PokeCircle
                            pokemonImage={isCreating ? undefined : modalPokemon.image}
                        />
                    )}
                    <CloseButton onClick={() => {
                        dispatch(setIsOpen(false));
                        dispatch(setPokemonModal(null));
                    }} />
                </S.ModalHeader>
                <S.ModalContent>
                    {!isCreating && modalPokemon && (
                        <>
                            <PokeName name={modalPokemon.name} editable />
                            <S.BodyStatsContainer>
                                {Object.keys(modalPokemon.bodyStats).map((stat, i, arr) => (
                                    <PokeStats
                                        separator={i < arr.length - 1}
                                        label={translatedBodyStats[stat as keyof BodyStats]}
                                        value={
                                            modalPokemon.bodyStats[stat as keyof BodyStats] as number
                                        }
                                    />
                                ))}
                            </S.BodyStatsContainer>
                            <HrTitle title="tipo" />
                            <S.TypeContainer>
                                {modalPokemon.types.map((type) => (
                                    <TypeLabel type={type} />
                                ))}
                            </S.TypeContainer>
                            <HrTitle title="habilidades" />
                            <S.AbilitiesContainer>
                                {modalPokemon.abilities.map((ability, i, arr) => (
                                    <S.Abilities>
                                        {`${ability}${i < arr.length - 1 ? "," : ""}`}
                                    </S.Abilities>
                                ))}
                            </S.AbilitiesContainer>
                            {!isAppearing && (
                                <>
                                    <HrTitle title="estatísticas" />
                                    <S.StatsContainer>
                                        {Object.keys(modalPokemon.stats).map((stat) => (
                                            <PokeStats
                                                inline
                                                label={stat}
                                                value={
                                                    modalPokemon.stats[stat as keyof Stats] as number
                                                }
                                            />
                                        ))}
                                    </S.StatsContainer>
                                    <Button text="Liberar Pokemon" />
                                </>
                            )}
                            {isAppearing && !isPartyFull && <CaptureButton onClick={() => {
                                dispatch(addPokemonToParty(modalPokemon));
                                dispatch(setIsOpen(false));
                                dispatch(setPokemonModal(null));
                            }} />}

                            {isPartyFull &&
                                <Button text="Liberar Pokemon" onClick={() => {
                                    dispatch(setIsOpen(false));
                                    dispatch(setPokemonModal(null));
                                }} />
                            }
                        </>
                    )}
                    {isCreating && <PokeForm />}
                </S.ModalContent>
            </S.ModalContainer>
        </S.Modal>
    );
};

export default Modal;
