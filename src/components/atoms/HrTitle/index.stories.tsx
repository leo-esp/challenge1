import { Meta, StoryObj } from "@storybook/react";
import HrTitle, { Props as HrTitleProps } from "./index";

export default {
  title: "Atoms/HrTitle",
  component: HrTitle,
} as Meta<HrTitleProps>;

export const Default: StoryObj<HrTitleProps> = {
  args: {
    title: "Estatística",
  },
};
