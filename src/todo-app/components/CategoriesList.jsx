import { useDispatch } from "react-redux";
import { changeCategory } from "../reducer/todosSlice";
import { categories } from "../utils/categories";
import Card from "./Card";
import styles from "./CategoriesList.module.css";
import { Icon } from "./Icon";

function CategoriesList() {
  const dispatch = useDispatch();
  return (
    <div className={styles.categoriesList}>
      {categories.map((category) => (
        <Card
          key={category.name}
          col
          handleClick={() => dispatch(changeCategory(category.name))}
        >
          <Icon
            name={category.iconName}
            size={40}
            stroke={
              category.iconName === "football" ? "var(--bg-base)" : undefined
            }
          />
          <p>{category.name}</p>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesList;
