import { Meta, StoryObj } from "@storybook/react";

import Tooltip, { Props as TooltipProps } from "./index";

export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
} as Meta<TooltipProps>;

export const Default: StoryObj<TooltipProps> = {
  args: {
    visible: true,
    isLoading: false,
  },
};

export const Loading: StoryObj<TooltipProps> = {
  args: {
    visible: true,
    isLoading: true,
  },
};
