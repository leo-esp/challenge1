import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./types";

const initialState = null as (Pokemon | null)

export const modalPokemonSlice = createSlice({
    name: "modalPokemon",
    initialState: initialState,
    reducers: {
        setPokemonModal: (state, action: PayloadAction<Pokemon>) => action.payload,
    },
});

// Action creators are generated for each case reducer function
export const { setPokemonModal } = modalPokemonSlice.actions;

export default modalPokemonSlice.reducer;
