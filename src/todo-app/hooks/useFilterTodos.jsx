import { useAppSelector } from "./useAppSelector";

export const useFilterTodos = () => {
  const { todos, category } = useAppSelector((state) => state.todos);
  const displayedTodos = todos.filter((todo) => todo.category === category);
  return displayedTodos;
};
