import React from "react";
import styles from "./MainContainer.module.css";

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.flexrow]
 * @param {boolean} [props.flexcol]
 */
function MainContainer({ children, flexrow, flexcol }) {
  return (
    <div
      className={
        flexrow
          ? styles.flexContainer
          : flexcol
            ? styles.flexColContainer
            : styles.mainContainer
      }
    >
      {children}
    </div>
  );
}

export default MainContainer;
