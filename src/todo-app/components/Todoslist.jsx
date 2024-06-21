import styles from "./Todoslist.module.css";
import Card from "./Card";
import TodoItem from "./TodoItem";
import Typography from "./Typography";
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
        <Typography>No goals are yet created</Typography>
      )}
    </div>
  );
}

export default Todoslist;
