import { createSlice } from "@reduxjs/toolkit";

export const displayTheme = createSlice({
  name: "display",
  initialState: {
    display: "light", // Set initial state to "light"
  },
  reducers: {
    changeDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { changeDisplay } = displayTheme.actions;

export default displayTheme.reducer;
