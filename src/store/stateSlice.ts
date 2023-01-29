import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    isCreating: boolean;
    isEditing: boolean;
    isAppearing: boolean;
    isOpen: boolean;
}

const initialState = {
    isCreating: false,
    isEditing: false,
    isAppearing: false,
    isOpen: false,
} as AppState

export const stateSlice = createSlice({
    name: "appState",
    initialState: initialState,
    reducers: {
        setIsAppearing: (state, action: PayloadAction<boolean>) => {
            state.isAppearing = action.payload;
            state.isCreating = false;
            state.isEditing = false;
        },
        setIsCreating: (state, action: PayloadAction<boolean>) => {
            state.isCreating = action.payload;
            state.isEditing = false;
            state.isAppearing = false;
        },
        setIsEditing: (state, action: PayloadAction<boolean>) => {
            state.isEditing = action.payload;
            state.isCreating = false;
            state.isAppearing = false;
        },
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsAppearing, setIsCreating, setIsEditing, setIsOpen } =
    stateSlice.actions;

export default stateSlice.reducer;
