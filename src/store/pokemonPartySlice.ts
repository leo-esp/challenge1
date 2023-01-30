import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./types";

export const pokemonPartySlice = createSlice({
  name: "pokemonParty",
  initialState: [],
  reducers: {
    addPokemonToParty(state: Pokemon[], action: PayloadAction<Pokemon>) {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPokemonToParty } = pokemonPartySlice.actions;

export default pokemonPartySlice.reducer;
