"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchInput.module.scss";
//import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.search_input}>
        {/* magnifying */}
        <div className={`${styles.mag_glass}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="100"
            height="100"
            style={{ width: "16px", height: "16px" }}
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <Input
          placeholder="Collections, wallets, or ENS"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
