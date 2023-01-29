import React from "react";
import * as S from "./styles";
import {
  Stats,
  translatedBodyStats,
  translatedStats,
} from "../../../store/types";
import { ShieldIcon, SpeedIcon, SwordIcon } from "../../../assets/images";

export interface Props {
  label: string | keyof Stats;
  value: number;
  inline?: boolean;
  icon?: string;
  altIcon?: string;
  separator?: boolean;
}

const formatTypes = {
  [translatedBodyStats.height]: (n: number) => `${(n / 10).toFixed(1)} cm`,
  [translatedBodyStats.weight]: (n: number) => `${(n / 10).toFixed(1)} kg`,
};
const icons = {
  attack: { icon: SwordIcon, alt: "Ícone de Espada" },
  defense: { icon: ShieldIcon, alt: "Ícone de Escudo" },
  specialAttack: { icon: SwordIcon, alt: "Ícone de Espada" },
  specialDefense: { icon: ShieldIcon, alt: "Ícone de Escudo" },
  speed: { icon: SpeedIcon, alt: "Ícone de Velocímetro" },
};

const PokeStats: React.FC<Props> = ({
  label,
  value,
  inline = false,
  separator = false,
}) => {
  return (
    <S.PokeStats inline={inline} separator={separator}>
      <div>
        {inline && (
          <S.Icon
            src={icons[label as keyof Stats].icon}
            alt={icons[label as keyof Stats].icon}
          />
        )}
        <span>{inline ? translatedStats[label as keyof Stats] : label}</span>
      </div>
      <span>
        {label === translatedBodyStats.height ||
        label === translatedBodyStats.weight
          ? formatTypes[label](value)
          : value}
      </span>
    </S.PokeStats>
  );
};

export default PokeStats;
