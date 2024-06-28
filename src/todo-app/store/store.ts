import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducer/todosSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
