import { useAppSelector } from "../hooks/useAppSelector";
import { selectTodoList } from "../reducer/todosSlice";
import styles from "./ProgressBar.module.css";

function ProgressBar() {
  const todos = useAppSelector(selectTodoList);
  const doneTodos = calculateTotalDoneTodos(todos);
  const doneTodosPercentage = Math.round((doneTodos / todos.length) * 100);
  return (
    <div className={styles.progressBar}>
      <p className={styles.progressValue}>{doneTodosPercentage + "%"}</p>
      <div
        className={styles.progress}
        style={{ width: `${doneTodosPercentage}%` }}
      ></div>
    </div>
  );
}

function calculateTotalDoneTodos(todoList) {
  let total = 0;
  for (const todo of todoList) {
    if (todo.done) {
      total += 1;
    }
  }
  return total;
}

export default ProgressBar;
