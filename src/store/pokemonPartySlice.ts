import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./types";

export const pokemonPartySlice = createSlice({
  name: "pokemonParty",
  initialState: [],
  reducers: {
    addPokemonToParty(state: Pokemon[], action: PayloadAction<Pokemon>) {
      state.push(action.payload);
    },
    releasePokemon(state: Pokemon[], action: PayloadAction<Pokemon>) {
      state.splice(
        state.findIndex(
          (pokemon) =>
            JSON.stringify(pokemon) === JSON.stringify(action.payload)
        ),
        1
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPokemonToParty, releasePokemon } = pokemonPartySlice.actions;

export default pokemonPartySlice.reducer;
