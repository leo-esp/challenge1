import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PokeStats, { Props as PokeStatsProps } from "./index";
import { ShieldIcon } from "../../../assets/images";

export default {
  title: "Molecules/PokeStats",
  component: PokeStats,
} as Meta<PokeStatsProps>;

export const Default: StoryObj<PokeStatsProps> = {
  args: {
    label: "HP",
    value: "45",
    inline: false,
    icon: "",
    altIcon: "",
  },
};

export const InlineIcon: StoryObj<PokeStatsProps> = {
  args: {
    label: "defesa",
    value: "45",
    inline: true,
    icon: ShieldIcon,
    altIcon: "Ícone de Escudo",
  },
};

export const WithSeparator = () => (
  <div style={{ display: "flex", flexDirection: "row", width: 350 }}>
    <PokeStats separator value="45" label="hp" />
    <PokeStats
      separator
      value="7"
      label="peso"
      format={(value) => `${value} kgs`}
    />
    <PokeStats
      value="69"
      label="altura"
      format={(value) => `${value} cm`}
    />
  </div>
);
