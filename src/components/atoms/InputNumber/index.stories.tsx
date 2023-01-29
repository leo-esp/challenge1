import { Meta, StoryObj } from "@storybook/react";
import InputNumber, { Props as InputNumberProps } from "./index";
import { ShieldIcon } from "../../../assets/images";

export default {
  title: "Molecules/InputNumber",
  component: InputNumber,
} as Meta<InputNumberProps>;

export const Default: StoryObj<InputNumberProps> = {
  args: {
    label: "hp",
    placeholder: "HP",
  },
};

export const WithSuffix: StoryObj<InputNumberProps> = {
  args: {
    label: "peso",
    placeholder: "Peso",
    suffix: "Kg",
  },
};

export const WithIcon: StoryObj<InputNumberProps> = {
  args: {
    label: "defesa",
    placeholder: "00",
    icon: ShieldIcon,
  },
};
