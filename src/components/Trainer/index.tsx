import React, { useState } from "react";
import Tooltip from "../Tooltip";
import * as S from "./styles";
import { randomIntFromInterval } from "utils/randomNumber";
interface Props {}

const Trainer: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const getRandonPokemon = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + randomIntFromInterval(1, 807)
    );
    const data = await response.json();
    console.log(data);
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
          onClick={getRandonPokemon}
        />
      )}
      {isLoading && <S.WalkingTrainer alt="Ash andando" />}
      <Tooltip isLoading={isLoading} visible={isTooltipVisible} />
    </S.Container>
  );
};

export default Trainer;
