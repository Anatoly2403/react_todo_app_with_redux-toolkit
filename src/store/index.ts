import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./slices/todosSlice";

export const rootStore = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootStore = ReturnType<typeof rootStore.getState>;
