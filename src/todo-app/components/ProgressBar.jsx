import { useAppSelector } from "../hooks/useAppSelector";
import styles from "./ProgressBar.module.css";

function ProgressBar() {
  const { todos } = useAppSelector((state) => state.todos);
  const doneTodos = todos.filter((todo) => !todo.done);
  const doneTodosPercentage = Math.round(
    (doneTodos.length * 100) / todos.length,
  );
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

export default ProgressBar;
