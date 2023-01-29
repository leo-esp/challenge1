import { Meta, StoryObj } from "@storybook/react";
import PokeCircle, { Props as PokeCircleProps } from "./index";

export default {
  title: "Molecules/PokeCircle",
  component: PokeCircle,
} as Meta<PokeCircleProps>;

export const Default: StoryObj<PokeCircleProps> = {
  args: {
    pokemonImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    isEmpty: false,
  },
};

export const Empty: StoryObj<PokeCircleProps> = {
  args: {
    isEmpty: true,
  },
};
