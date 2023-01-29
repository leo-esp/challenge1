import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Modal, { Props as ModalProps } from "./index";
import PokePartyContext from "../../../store/PokePartyContext";
import { types } from "../../../store/types";

export default {
  title: "Organisms/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <PokePartyContext.Provider
        value={[
          {
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            name: "Bulbasaur",
            types: [types.GRASS, types.POISON],
            abilities: ["overgrow", "chlorophyll"],
            stats: {
              attack: 49,
              defense: 49,
              specialAttack: 65,
              specialDefense: 65,
              speed: 45,
            },
            bodyStats: {
              hp: 45,
              height: 7,
              weight: 69,
            },
          },
        ]}
      >
        <Story />
      </PokePartyContext.Provider>
    ),
  ],
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
