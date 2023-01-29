import { Meta, StoryObj } from "@storybook/react";

import Button, { Props as ButtonProps } from "./index";

export default {
  title: "Atoms/Buttons/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    text: "liberar pokemon",
  },
};
