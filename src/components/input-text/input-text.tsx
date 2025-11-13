import type React from "react";
import style from "./style.module.css"
import Icon from "../icon/icon";

interface InputTextProps extends Omit<React.ComponentProps<"input">, "size" | "disabled">{
    icon: React.ComponentProps<typeof Icon>["svg"];
    placeholder: string
}

export default function InputText({icon, placeholder, ...props}: InputTextProps) {
    return (
        <label className={style.base}>
            <Icon svg={icon}/>
            <input type="text" placeholder={placeholder} {...props} className={style.input} />
        </label>
    )
}