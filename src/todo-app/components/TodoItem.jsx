import styles from "./TodoItem.module.css";
import Checkbox from "./Checkbox";
import Typography from "./Typography";
import ActionButton from "./ActionButton";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";
import checkmark from "../assets/icons/checkmark.svg";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../reducer/todosSlice";
import { useState } from "react";

function TodoItem({ todo }) {
  const [editingMode, setEditingMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(updateTodo(newTodo));
    setEditingMode(false);
  };
  return (
    <>
      <div className={styles.taskName}>
        <Checkbox todo={todo} />
        {editingMode ? (
          <input
            type="text"
            onChange={(e) => setNewTodo({ ...todo, name: e.target.value })}
          />
        ) : (
          <Typography fontSize={24}>{todo.name}</Typography>
        )}
      </div>
      <div className={styles.actionButton}>
        {editingMode ? (
          <ActionButton icon={checkmark.src} handleClick={handleEdit} />
        ) : (
          <ActionButton
            icon={edit.src}
            handleClick={() => setEditingMode(true)}
          />
        )}
        <ActionButton
          icon={trash.src}
          handleClick={() => dispatch(deleteTodo(todo.id))}
        />
      </div>
    </>
  );
}

export default TodoItem;
