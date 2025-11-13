import React from "react";
import style from "./style.module.css"


interface CardProps extends React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  children,
  className,
  ...props
}: CardProps) {
  const classes = `${style.card_base} ${className ? className : ""}`;
  return React.createElement(
    as,
    { className: classes, ...props },
    children
  );
}
