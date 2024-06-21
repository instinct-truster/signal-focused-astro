import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      name: "Complete this goal setting app",
      category: "finance",
    },
  ],
  category: "finance",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
        state.todos.sort((a, b) => a.id - b.id);
      }
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { deleteTodo, updateTodo, addTodo, changeCategory } =
  todosSlice.actions;

export default todosSlice.reducer;
