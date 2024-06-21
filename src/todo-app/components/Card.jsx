import styles from "./Card.module.css";

function Card({ children, col, handleClick }) {
  return (
    <div
      onClick={() => (handleClick ? handleClick() : null)}
      className={col ? styles.cardCol : styles.card}>
      {children}
    </div>
  );
}

export default Card;
