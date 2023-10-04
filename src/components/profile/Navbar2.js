"use client";
import React, { useState } from "react";
import Profile from "./Profile";
import Box from "./Box";
import styles from "./Navbar2.module.scss";
const Navbar2 = () => {
  const [favorite, setFavorite] = useState(0);
  const handleClick = () => {
    if (favorite == 0) setFavorite(1);
    else setFavorite(0);
  };
  return (
    <nav className={styles.container}>
      <div className={styles.profile_text}>
        <div className={styles.list_contain}>
          <div className={styles.lists}>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                paddingRight: "50px",
                width: "30%",
              }}
            >
              <a href="/" className={styles.profile_contain}>
                <Profile />
              </a>
              <button
                onClick={handleClick}
                style={{ background: "rgb(8, 4, 4)", border: "none" }}
              >
                {favorite ? (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{
                        height: "24px",
                        width: "24px",
                        color: "white",
                        background: "rgb(8, 4, 4)",
                      }}
                    >
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                ) : (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{
                        height: "24px",
                        width: "24px",
                        color: "white",
                        background: "rgb(8, 4, 4)",
                      }}
                    >
                      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
            <div className={styles.text_contain}>
              <a href="/" className={styles.text}>
                <Box tit="floor price" mess="24.23" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/" className={styles.text}>
                <Box tit="top bid" mess="24.01" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/" className={styles.text}>
                <Box tit="1d change" mess="0.00%" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/" className={styles.text}>
                <Box tit="7d change" mess="2.24%" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/ " className={styles.text}>
                <Box tit="15m volume" mess="24.23" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/ " className={styles.text}>
                <Box tit="1d volume" mess="492.08" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/ " className={styles.text}>
                <Box tit="7d volume" mess="5896.85" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/ " className={styles.text}>
                <Box tit="owners" mess="5645(56%)" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/" className={styles.text}>
                <Box tit="supply" mess="9998" />
              </a>
            </div>
            <div className={styles.text_contain}>
              <a href="/" className={styles.text}>
                <Box tit="royalty" mess="0.0%" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
