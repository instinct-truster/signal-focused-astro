import { createSlice, isAnyOf } from "@reduxjs/toolkit";

/**
 * @typedef {import("../../types/todo").Todo} Todo
 */

const storedTodos = localStorage.getItem("todos");
const storedCategory = localStorage.getItem("category");

/**
 * @typedef {Object} TodosState
 * @prop {Array<Todo>} TodosState.todos
 * @prop {string} TodosState.category
 */

/**
 * @type {TodosState}
 */
const initialState = {
  todos: storedTodos
    ? JSON.parse(storedTodos)
    : [
        {
          id: 1,
          name: "Complete this goal setting app",
          category: "finance",
          done: false,
        },
      ],
  category: storedCategory ? storedCategory : "faith",
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
        (todo) => todo.id === action.payload.id,
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
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(updateTodo, addTodo, deleteTodo), (state, action) => {
        const serializedTodos = JSON.stringify(state.todos);
        localStorage.setItem("todos", serializedTodos);
      })
      .addMatcher(isAnyOf(changeCategory), (state, action) => {
        const category = state.category;
        localStorage.setItem("category", category);
      });
  },
});

export const { deleteTodo, updateTodo, addTodo, changeCategory } =
  todosSlice.actions;

export default todosSlice.reducer;
