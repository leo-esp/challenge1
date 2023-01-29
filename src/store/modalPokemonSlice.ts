import { createSlice } from "@reduxjs/toolkit";

export const modalPokemonSlice = createSlice({
  name: "modalPokemon",
  initialState: null,
  reducers: {
    setPokemonModal: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const { setPokemonModal } = modalPokemonSlice.actions;

export default modalPokemonSlice.reducer;
