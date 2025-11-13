import type React from "react";
import Icon from "../icon/icon";
import style from "./style.module.css"

interface ButtonIconProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">{
    icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function ButtonIcon({icon} : ButtonIconProps) {
    return (
        <button className={style.button}>
            <Icon svg={icon} />
        </button>
    )
}