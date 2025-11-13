import type React from "react"
import Text from "../text"
import style from "./style.module.css"

interface SeletcProps extends React.ComponentProps<"button">{
}

export default function SelectTime({children, ...props}: SeletcProps) {
    return (
        <label className={style.base}>
        <Text variant="md">{children}</Text>
            <input type="radio" value={`${children}`} className={style.hidden}/>
        </label>
    )
}