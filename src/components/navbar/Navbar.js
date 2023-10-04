import React from "react";
import imageContent from "../../assets/image/logo.png";
import Image from "next/image";
import SearchInput from "./SearchInput";
import ConnectWallet from "./ConnectWallet";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  // return <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>;
  return (
    <nav style={{ width: "100%" }}>
      <div className={styles.nav_container}>
        <div className={styles.left_container}>
          <div className={styles.image_container}>
            <a href="/" style={{ width: "100%", height: "100%" }}>
              <Image
                alt="icon"
                src={imageContent}
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </div>
          <div className={styles.text_container}>
            <div>
              <a href="/" className={styles.text}>
                COLLECTIONS
              </a>
            </div>
            <div>
              <a href="/" className={styles.text}>
                PORTFOLIO
              </a>
            </div>
            <div>
              <a href="/" className={styles.text}>
                ACTIVITY
              </a>
            </div>
            <div>
              <a href="/" className={styles.text}>
                AIRDROP
              </a>
            </div>
          </div>
        </div>
        <SearchInput />
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Navbar;
