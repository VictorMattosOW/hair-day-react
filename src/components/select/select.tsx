import type React from "react";
import style from "./style.module.css";

interface SeletcProps extends React.ComponentProps<"input"> {
  "data-selected"?: boolean;
}

export default function SelectTime({
  children,
  disabled,
  onChange,
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
        className={`${style.hidden} ${style.base}`}
        {...rest}
        checked={!!isSelected}
        onChange={onChange}
      />
    </label>
  );
}
