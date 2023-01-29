import React, { useState } from "react";
import Tooltip from "../atoms/Tooltip";
import * as S from "./styles";
import { randomIntFromInterval } from "../../utils/randomNumber";
import { useDispatch } from "react-redux";
import { setPokemonModal } from "../../store/modalPokemonSlice";
import { setIsAppearing } from "../../store/stateSlice";

export interface Props {
  setIsOpen: (b: boolean) => void;
}

const Trainer: React.FC<Props> = ({ setIsOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const dispatch = useDispatch();

  const getRandonPokemon = async () => {
    setIsOpen(true);
    setIsLoading(true);
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + randomIntFromInterval(1, 807)
    );
    const data = await response.json();
    console.log(data);
    console.log("---------------------------------------------------------");

    dispatch(
      setPokemonModal({
        name: data.name,
        image: data.sprites.front_default,
        bodyStats: {
          hp: await data.stats.find((stat) => stat.stat.name === "hp")
            .base_stat,
          weight: data.weight,
          height: data.height,
        },
        types: data.types.map((type) => type.name),
        abilities: data.abilities.map((ab) => ab.ability.name),
        stats: {
          attack: await data.stats.find((s) => s.stat.name === "attack")
            .base_stat,
          defense: await data.stats.find((s) => s.stat.name === "defense")
            .base_stat,
          specialAttack: await data.stats.find(
            (s) => s.stat.name === "special-attack"
          ).base_stat,
          specialDefense: await data.stats.find(
            (s) => s.stat.name === "special-defense"
          ).base_stat,
          speed: await data.stats.find((s) => s.stat.name === "speed")
            .base_stat,
        },
      })
    );
    dispatch(setIsAppearing(true));
    setIsLoading(false);
  };
  return (
    <S.Container>
      {!isLoading && (
        <S.Trainer
          onMouseEnter={() => {
            setIsTooltipVisible(true);
          }}
          onMouseLeave={() => {
            setIsTooltipVisible(false);
          }}
          data-text="Thanks for hovering! I'm a tooltip"
          onClick={() => {
            getRandonPokemon();
          }}
        />
      )}
      {isLoading && <S.WalkingTrainer alt="Ash andando" />}
      <Tooltip isLoading={isLoading} visible={isTooltipVisible} />
    </S.Container>
  );
};

export default Trainer;
