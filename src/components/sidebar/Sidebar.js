import React from "react";
import styles from "./Sidebar.module.scss";
import Status from "./Status";
import Traits from "./Traits";

const Sidebar = () => {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-content"]}>
        <div className={styles["inner-content"]}>
          <div className={styles["status"]}>
            <Status />
          </div>
          <div className={styles["traits"]}>
            <Traits />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
