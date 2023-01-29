import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    isCreating: false,
    isEditing: false,
    isAppearing: false,
  },
  reducers: {
    setIsAppearing: (state, action) => (state.isAppearing = action.payload),
    setIsCreating: (state, action) => (state.isCreating = action.payload),
    setIsEditing: (state, action) => (state.isEditing = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const { setIsAppearing, setIsCreating, setIsEditing } =
  stateSlice.actions;

export default stateSlice.reducer;
