import { createContext } from "react";
import { configureStore } from "@reduxjs/toolkit";
import modalPokemonReducer from "./modalPokemonSlice";
import pokemonPartyReducer from "./pokemonPartySlice";
import stateReducer from "./stateSlice";

export default configureStore({
  reducer: {
    modalPokemon: modalPokemonReducer,
    pokemonParty: pokemonPartyReducer,
    appState: stateReducer,
  },
});
