import React from "react";
import * as S from "./styles";
import {
  BodyStats,
  translatedBodyStats,
  Stats,
  Pokemon,
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

import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import {
  addPokemonToParty,
  releasePokemon,
} from "../../../store/pokemonPartySlice";
import { setIsOpen } from "../../../store/stateSlice";
import { setPokemonModal } from "../../../store/modalPokemonSlice";
import { useRef, useEffect } from "react";

const Modal: React.FunctionComponent = () => {
  const modalPokemon = useAppSelector((state) => state.modalPokemon);
  const isPartyFull = useAppSelector((state) => state.pokemonParty.length > 5);
  const { isCreating, isAppearing, isOpen, isEditing } = useAppSelector(
    (state) => state.appState
  );
  const modalRef = useRef<null | HTMLDivElement>(null);
  const closeAndClean = () => {
    dispatch(setIsOpen(false));
    dispatch(setPokemonModal(null));
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modalRef && modalRef.current) {
      modalRef.current.scrollIntoView({
        block: "start",
      });
    }
  }, [isOpen]);

  return (
    <S.Modal
      isOpen={isOpen}
      onClick={() => {
        closeAndClean();
      }}
    >
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader ref={modalRef}>
          <PokeCircle
            pokemonImage={
              isCreating || !modalPokemon ? "" : (modalPokemon as Pokemon).image
            }
          />
          <CloseButton
            onClick={() => {
              closeAndClean();
            }}
          />
        </S.ModalHeader>
        <S.ModalContent>
          {!isCreating && modalPokemon && (
            <>
              <PokeName name={modalPokemon.name} editable={isEditing} />
              <S.BodyStatsContainer>
                {Object.keys(modalPokemon.bodyStats).map((stat, i, arr) => (
                  <PokeStats
                    key={i}
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
                {modalPokemon.types.map((type, i) => (
                  <TypeLabel type={type} key={i} />
                ))}
              </S.TypeContainer>
              <HrTitle title="habilidades" />
              <S.AbilitiesContainer>
                {modalPokemon.abilities.map((ability, i, arr) => (
                  <S.Abilities key={i}>
                    {`${ability}${i < arr.length - 1 ? "," : ""}`}
                  </S.Abilities>
                ))}
              </S.AbilitiesContainer>
              <HrTitle title="estatísticas" />
              <S.StatsContainer>
                {Object.keys(modalPokemon.stats).map((stat, i) => (
                  <PokeStats
                    key={i}
                    inline
                    label={stat}
                    value={modalPokemon.stats[stat as keyof Stats] as number}
                  />
                ))}
              </S.StatsContainer>
              {isAppearing && !isPartyFull && (
                <CaptureButton
                  onClick={() => {
                    dispatch(addPokemonToParty(modalPokemon));
                    closeAndClean();
                  }}
                />
              )}

              {isPartyFull ||
                (isEditing && (
                  <Button
                    text="Liberar Pokemon"
                    onClick={() => {
                      if (!isAppearing) dispatch(releasePokemon(modalPokemon));
                      closeAndClean();
                    }}
                  />
                ))}
            </>
          )}
          {isCreating && <PokeForm />}
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;
