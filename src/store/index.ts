import { configureStore } from "@reduxjs/toolkit";
import modalPokemonReducer from "./modalPokemonSlice";
import pokemonPartyReducer from "./pokemonPartySlice";
import stateReducer from "./stateSlice";

export const store = configureStore({
    reducer: {
        modalPokemon: modalPokemonReducer,
        pokemonParty: pokemonPartyReducer,
        appState: stateReducer,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch