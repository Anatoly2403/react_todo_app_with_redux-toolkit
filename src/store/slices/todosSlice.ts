import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../shared/interfaces";

interface ITodosState {
  todos: ITodo[];
}

const initialState: ITodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: ITodosState, action: PayloadAction<string>) => {
      state.todos.push({
        id: new Date().toISOString(),
        value: action.payload,
        completed: false,
      });
    },
    removeTodo: (state: ITodosState, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    toggleTodoComplete: (state: ITodosState, action: PayloadAction<string>) => {
      state.todos = state.todos.map((t) =>
        t.id !== action.payload ? t : { ...t, completed: !t.completed }
      );
    },
  },
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
