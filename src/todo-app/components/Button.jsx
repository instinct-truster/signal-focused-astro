import styles from "./Button.module.css";

function Button({ onClick, isDisabled, children }) {
  return (
    <button disabled={isDisabled} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
