import type React from "react";
import Text from "../text";
import style from "./style.module.css";

interface SeletcProps extends React.ComponentProps<"button"> {
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
    <button
      type="button"
      className={`${style.base} ${disabled ? style.disabled : ""} ${
        isSelected ? style.selected || "" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <Text variant="md">{children}</Text>
    </button>
  );
}
