import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon, EmptyPokemon } from "./types";

const initialState = null as Pokemon | null;

export const modalPokemonSlice = createSlice({
  name: "modalPokemon",
  initialState: initialState,
  reducers: {
    setPokemonModal: (_state, action: PayloadAction<Pokemon | null>) =>
      action.payload,
    setPokemonImageModal: (state, action: PayloadAction<string>) => {
      if (!state) {
        state = EmptyPokemon();
        (state as Pokemon).image = action.payload;
      }
      (state as Pokemon).image = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemonModal, setPokemonImageModal } =
  modalPokemonSlice.actions;

export default modalPokemonSlice.reducer;
