import Icon from "../icon/icon";
import style from "./style.module.css";
import CalendarIcon from "../../assets/CalendarBlank.svg?react";
import CaretDownIcon from "../../assets/CaretDown.svg?react";
import { useRef } from "react";
import { getTodayDate } from "../../utils/horarios";

interface InputCalendarProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputCalendar({
  className,
  onChange,
  ...rest
}: InputCalendarProps) {
  const classes = `${style.base} ${className ? className : ""}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.showPicker?.();
  };
  return (
    <button type="button" className={classes} onClick={handleClick}>
      <Icon svg={CalendarIcon} />
      <input
        type="date"
        min={getTodayDate()}
        ref={inputRef}
        onChange={onChange}
        {...rest}
      />
      <Icon svg={CaretDownIcon} />
    </button>
  );
}
