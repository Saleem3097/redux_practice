import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import themeReducer from "../Features/theme/ThemeSlice";
import displayReducer from "./AppSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    display: displayReducer,
  },
});
