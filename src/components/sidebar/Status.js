"use client";
import React, { useState } from "react";
import styles from "./Status.module.scss";

const Status = () => {
  const [selectedOption, setSelectedOption] = useState("onlyBuyNow");
  const [isRarityOpen, setIsRarityOpen] = useState(false); // State to manage rarity visibility
  const [isPriceOpen, setIsPriceOpen] = useState(false); // State to manage price visibility

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const toggleRarity = () => {
    setIsRarityOpen(!isRarityOpen);
  };

  const togglePrice = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  const changeHandler = (option) => {};

  return (
    <div className={styles["status-container"]}>
      <div className={styles["section-title"]}>Status</div>
      <div
        style={{
          padding: "1rem",
          paddingLeft: "1px",
          paddingRight: "1px",
          flexDirection: "column",
        }}
      >
        <label className={styles["radio-label"]}>
          <input
            type="radio"
            name="status"
            value="onlyBuyNow"
            checked={selectedOption === "onlyBuyNow"}
            onChange={() => handleOptionClick("onlyBuyNow")}
          />
          &nbsp;&nbsp; Only Buy Now
        </label>
        <label className={styles["radio-label"]}>
          <input
            type="radio"
            name="status"
            value="showAll"
            checked={selectedOption === "showAll"}
            onChange={() => handleOptionClick("showAll")}
          />
          &nbsp;&nbsp; Show All
        </label>
      </div>
      <div className={styles["filters-container"]}>
        <button
          className={`${styles["filters-header"]} ${
            isRarityOpen ? styles["expanded"] : ""
          }`}
          onClick={toggleRarity}
        >
          <div className={styles["title"]}>rarity</div>
          <div className={styles["chevron"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
            >
              <path d="M1.71429 0H0V1.71429H1.71429V3.42857H3.42857V5.14286H5.14286V6.85714H6.85714V5.14286H8.57143V3.42857H10.2857V1.71429H12V0H10.2857V1.71429H8.57143V3.42857H6.85714V5.14286H5.14286V3.42857H3.42857V1.71429H1.71429V0Z" />
            </svg>
          </div>
        </button>

        {/* Rarity */}
        {isRarityOpen && (
          <div className={styles["filters-content"]}>
            <div className={styles["filter-buttons"]}>
              <button className={styles["filter-button"]}>
                <div className={styles["filter-label"]}>top 1%</div>
              </button>
              <button className={styles["filter-button"]}>
                <div className={styles["filter-label"]}>top 10%</div>
              </button>
              <button className={styles["filter-button"]}>
                <div className={styles["filter-label"]}>top 25%</div>
              </button>
            </div>
            <div className={styles["filter-inputs"]}>
              <div className={styles.input_con}>
                <label className={styles["filter-label"]} htmlFor="min-input">
                  min
                </label>
                <input
                  id="min-input"
                  type="number"
                  placeholder="0"
                  inputMode="decimal"
                  onChange={changeHandler}
                  value="0"
                />
              </div>
              <div className={styles.input_con}>
                <label className={styles["filter-label"]} htmlFor="max-input">
                  max
                </label>
                <input
                  id="max-input"
                  type="number"
                  placeholder="9998"
                  inputMode="decimal"
                  onChange={changeHandler}
                  value="1000"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Price */}
      <div className={styles["filters-container"]}>
        <button
          className={`${styles["filters-header"]} ${
            isPriceOpen ? styles["expanded"] : ""
          }`}
          onClick={togglePrice}
        >
          <div className={styles["title"]}>price</div>
          <div className={styles["chevron"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
            >
              <path d="M1.71429 0H0V1.71429H1.71429V3.42857H3.42857V5.14286H5.14286V6.85714H6.85714V5.14286H8.57143V3.42857H10.2857V1.71429H12V0H10.2857V1.71429H8.57143V3.42857H6.85714V5.14286H5.14286V3.42857H3.42857V1.71429H1.71429V0Z" />
            </svg>
          </div>
        </button>

        {/* Price */}
        {isPriceOpen && (
          <div className={styles["filters-content"]}>
            <div className={styles["filter-inputs"]}>
              <div className={styles.input_con}>
                <label className={styles["filter-label"]} htmlFor="min-input">
                  min
                </label>
                <input
                  id="min-input"
                  type="number"
                  placeholder="0"
                  inputMode="decimal"
                  onChange={changeHandler}
                  value="0"
                />
              </div>
              <div className={styles.input_con}>
                <label className={styles["filter-label"]} htmlFor="max-input">
                  max
                </label>
                <input
                  id="max-input"
                  type="number"
                  placeholder="9998"
                  inputMode="decimal"
                  onChange={changeHandler}
                  value="1000"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;
