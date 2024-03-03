import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    color: "",
  },
  reducers: {
    changeTextColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTextColor } = themeSlice.actions;

export default themeSlice.reducer;
