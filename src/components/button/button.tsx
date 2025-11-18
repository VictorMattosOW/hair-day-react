import React from "react"
import Text from "../text"
import styles from "./button.module.css"

interface ButtonProps extends React.ComponentProps<"button"> {}

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={`${styles.base} ${className}`} {...props}>
            <Text variant="title-md">{children}</Text>
        </button>
    )
}