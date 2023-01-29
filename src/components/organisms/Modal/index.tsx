import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import {
  BodyStats,
  translatedBodyStats,
  Stats,
  Pokemon,
  AppState,
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

export interface Props {
  isOpen: boolean;
}

const Modal: React.FunctionComponent<Props> = ({ isOpen }) => {
  const modalPokemon = useSelector((state: AppState) => {
    console.log(state);
    return state.modalPokemon;
  });
  const { isCreating, isAppearing, isEditing } = useSelector(
    (state: AppState) => state.appState
  );
  console.log("modalPokemon", modalPokemon);
  return (
    <S.Modal isOpen={isOpen}>
      <S.ModalContainer>
        <S.ModalHeader>
          {modalPokemon && (
            <PokeCircle
              pokemonImage={isCreating ? undefined : modalPokemon.image}
            />
          )}
          <CloseButton />
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
              {isAppearing && <CaptureButton />}
            </>
          )}
          {isCreating && <PokeForm />}
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;
