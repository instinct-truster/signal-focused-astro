import styles from "./Dropdown.module.css";
import down from "../assets/icons/down.svg";
import { categories } from "../utils/categories";
import { useDisclosure } from "../hooks/useDisclosure";

function Dropdown({
  onChange,
  value,
  placeholder = "Please select an option",
}) {
  const { isOpen, toggle, close } = useDisclosure();
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggle}>
        <p>{value ? value : placeholder}</p>
        <img src={down} alt="down arrow" />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {categories.map((category) => (
            <p
              key={category.name}
              onClick={(e) => {
                onChange(e.target.innerHTML);
                close();
              }}>
              {category.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
