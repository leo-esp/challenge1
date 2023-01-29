import { Meta, StoryObj } from "@storybook/react";
import TypeLabel, { Props as TypeLabelProps } from "./index";

export default {
  title: "Atoms/TypeLabel",
  component: TypeLabel,
} as Meta<TypeLabelProps>;

export const Default: StoryObj<TypeLabelProps> = {
  args: {
    type: "bug",
  },
};
