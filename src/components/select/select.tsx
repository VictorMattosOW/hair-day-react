import type React from "react";
import Text from "../text";
import style from "./style.module.css";

interface SeletcProps extends React.ComponentProps<"input"> {
  "data-selected"?: boolean;
}

export default function SelectTime({
  children,
  disabled,
  onClick,
  "data-selected": isSelected,
  ...rest
}: SeletcProps) {
  return (
    <label
      className={`${style.base} ${disabled ? style.disabled : ""} 
      ${isSelected ? style.selected || "" : ""}
    `}
    >
      {children}
      <input
        type="radio"
        value={`${children}`}
        disabled={disabled}
        className={`${style.hidden} ${style.base}`}
        {...rest}
        onClick={onClick}
      />
    </label>
  );
}
