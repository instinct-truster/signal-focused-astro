import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducer/todosSlice";
import Button from "./Button";
import Card from "./Card";
import Dropdown from "./Dropdown";
import styles from "./Form.module.css";
import Typography from "./Typography";

function Form() {
  const vm = useFormViewModel();
  return (
    <div className={styles.form}>
      <Typography fontSize={20} marginLeft={6} marginBottom={-6} bold>
        Set your next goal...
      </Typography>
      <Card col>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Your Goal:</Typography>
          <input onChange={vm.handleNameChange} type="text" value={vm.name} />
        </div>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Category:</Typography>
          <Dropdown
            placeholder="Select your category"
            value={vm.category}
            onChange={vm.handleCategoryChange}
          />
        </div>
        <Button isDisabled={!vm.isValid} onClick={vm.handleAddTodo}>
          ADD
        </Button>
      </Card>
    </div>
  );
}

function useFormViewModel() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(initialValues.category);
  const [name, setName] = useState(initialValues.name);

  const isValid = category !== "" && name.length > 0;

  const clearForm = () => {
    setName(initialValues.name);
    setCategory(initialValues.category);
  };

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), name, category, done: false };
    dispatch(addTodo(newTodo));
    clearForm();
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleNameChange = (inputEvent) => {
    setName(inputEvent.target.value);
  };

  return {
    name,
    category,
    isValid,
    handleAddTodo,
    handleCategoryChange,
    handleNameChange,
  };
}

const initialValues = {
  name: "",
  category: "",
};

export default Form;
