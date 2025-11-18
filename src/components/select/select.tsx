import type React from "react";
import Text from "../text";
import style from "./style.module.css";

interface SeletcProps extends React.ComponentProps<"button"> {}

export default function SelectTime({ children, disabled }: SeletcProps) {
  return (
    <label className={`${style.base} ${disabled ? style.disabled : ""}`}>
      {children}
      <input
        type="radio"
        value={`${children}`}
        disabled={disabled}
        className={`${style.hidden} ${style.base}`}
      />
    </label>
  );
}
