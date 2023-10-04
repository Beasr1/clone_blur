import React from "react";
import styles from "./ConnectWallet.module.scss";

const ConnectWallet = ({ children }) => {
  return (
    <div>
      <div className={styles.connect_container}>
        <div className={styles.connect}>
          <button className={styles.button}>
            <div name="wallet" className={styles.wallet}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                width="100"
                height="100"
                style={{ width: "24px", height: "24px" }}
              >
                <path d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
            </div>
            <div style={{ color: "black", textTransform: "uppercase" }}>
              connect wallet
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
