import React from "react";
import style from "./style.module.css"

interface ContainerProps extends React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

export default function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  const classes = `${style.container} ${className ? className : ""}`;
  return React.createElement(
    as,
    { className: classes, ...props },
    children
  );
}
