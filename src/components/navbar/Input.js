import React from "react";
import { forwardRef } from "react";
import styles from "./Input.module.scss";
const Input = forwardRef(({ type, disabled, ...props }, ref) => {
  return (
    <input
      type={type}
      className={styles.input_bar}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
});

// Add a display name to your component
Input.displayName = "Input";

export default Input;
