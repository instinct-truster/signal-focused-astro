import styles from "./Title.module.css";
import Typography from "./Typography";

function Title() {
  return (
    <div className={styles.titleContainer}>
      <Typography fontSize={24} bold>
        Advanced Goal Setting App
      </Typography>
    </div>
  );
}

export default Title;
