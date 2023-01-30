import { Meta, StoryObj } from "@storybook/react";
import Dropdown, { Props as DropdownProps } from "./index";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {
  args: {
    name: "teste",
    options: [
      { value: "eletric", text: "eletric" },
      { value: "grass", text: "grass" },
      { value: "poison", text: "poison" },
    ],
  },
};
