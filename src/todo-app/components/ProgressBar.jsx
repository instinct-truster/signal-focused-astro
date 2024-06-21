import styles from "./ProgressBar.module.css";
import { useSelector } from "react-redux";

function ProgressBar() {
  const { todos } = useSelector((state) => state.todos);
  const doneTodos = todos.filter((todo) => !todo.done);
  const doneTodosPercentage = Math.round(
    (doneTodos.length * 100) / todos.length
  );
  return (
    <div className={styles.progressBar}>
      <p className={styles.progressValue}>{doneTodosPercentage + "%"}</p>
      <div
        className={styles.progress}
        style={{ width: `${doneTodosPercentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;
