// Sidebar2.js
import React from "react";
import styles from "./Sidebar2.module.scss"; // Import the SCSS module
import Activity from "./Activity";
import Depth from "./Depth";

const Sidebar2 = () => {
  return (
    <div className={styles["flex_container"]}>
      <div className={styles["hidden_md"]}>
        <div className={styles["flex_column"]}>
          <Activity />
          <Depth />
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
