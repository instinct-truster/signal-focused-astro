import { useMemo } from "react";
import { selectCategory, selectTodoList } from "../reducer/todosSlice";
import { useAppSelector } from "./useAppSelector";

export const useFilterTodos = () => {
  const todos = useAppSelector(selectTodoList);
  const category = useAppSelector(selectCategory);
  return useMemo(
    () => todos.filter((todo) => todo.category === category),
    [todos, category],
  );
};
