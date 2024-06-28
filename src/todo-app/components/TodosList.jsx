import styles from "./TodosList.module.css";
import Card from "./Card";
import TodoItem from "./TodoItem";
import { useFilterTodos } from "../hooks/useFilterTodos";

function Todoslist() {
  const displayedTodos = useFilterTodos();
  return (
    <div className={styles.todoslist}>
      {displayedTodos.length > 0 ? (
        displayedTodos.map((todo) => (
          <Card key={todo.id}>
            <TodoItem todo={todo} />
          </Card>
        ))
      ) : (
        <p>No goals are yet created</p>
      )}
    </div>
  );
}

export default Todoslist;
