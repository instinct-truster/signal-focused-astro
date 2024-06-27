import styles from "./Dropdown.module.css";
import { categories } from "../utils/categories";
import { useDisclosure } from "../hooks/useDisclosure";

function Dropdown({ onChange, value, placeholder = "" }) {
  const { isOpen, toggle, close } = useDisclosure();
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggle}>
        <p>{value ? value : placeholder}</p>
        <svg
          className={styles.dropsvg}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="var(--bg-base)"
            d="M3.2 5.74a.75.75 0 0 1 1.06-.04L8 9.227L11.74 5.7a.75.75 0 1 1 1.02 1.1l-4.25 4a.75.75 0 0 1-1.02 0l-4.25-4a.75.75 0 0 1-.04-1.06"
          />
        </svg>
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {categories.map((category) => (
            <p
              key={category.name}
              onClick={(e) => {
                onChange(e.target.innerHTML);
                close();
              }}
            >
              {category.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
