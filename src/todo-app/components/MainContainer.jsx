import React from "react";
import styles from "./MainContainer.module.css";

function MainContainer({ children, flexrow, flexcol }) {
  return (
    <div
      className={
        flexrow
          ? styles.flexContainer
          : flexcol
          ? styles.flexColContainer
          : styles.mainContainer
      }>
      {children}
    </div>
  );
}

export default MainContainer;
