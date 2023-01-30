import { Meta, StoryObj } from "@storybook/react";
import Modal, { Props as ModalProps } from "./index";

export default {
  title: "Organisms/Modal",
  component: Modal,
} as Meta<ModalProps>;

export const BaseModal: StoryObj<ModalProps> = {
  args: {
    isOpen: true,
  },
};
export const CaptureModal: StoryObj<ModalProps> = {
  args: {
    isOpen: true,
    isCapture: true,
  },
};

export const NewModal: StoryObj<ModalProps> = {
  args: {
    isOpen: true,
    isCreating: true,
  },
};
