import styles from "./ActionButton.module.css";

function ActionButton({ handleClick, icon }) {
  return (
    <div
      className={styles.actionButton}
      onClick={() => (handleClick ? handleClick() : null)}
    >
      <img src={icon} alt="icon" />
    </div>
  );
}

export default ActionButton;
