import { Meta, StoryObj } from "@storybook/react";
import InputText, { Props as InputTextProps } from "./index";

export default {
  title: "Atoms/InputText",
  component: InputText,
} as Meta<InputTextProps>;

export const Default: StoryObj<InputTextProps> = {
  args: {
    label: "nome",
    placeholder: "Nome",
  },
};

export const WithoutLabel: StoryObj<InputTextProps> = {
  args: {
    placeholder: "Habilidade 1",
  },
};
