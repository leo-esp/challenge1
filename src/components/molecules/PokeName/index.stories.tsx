import { Meta, StoryObj } from "@storybook/react";
import PokeName, { Props as PokeNameProps } from "./index";

export default {
  title: "Molecules/PokeName",
  component: PokeName,
} as Meta<PokeNameProps>;

export const Default: StoryObj<PokeNameProps> = {
  args: {
    name: "Bulbasaur",
    isEditing: false,
    editable: false,
  },
};
