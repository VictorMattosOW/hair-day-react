import React from "react";

type variants = "title-lg" | "title-md" | "title-sm" | "md" | "sm"

interface TextProps {
    as?: keyof React.JSX.IntrinsicElements;
    variant: variants;
    className?: string;
    children?: React.ReactNode
}

export default function Text({
    as = "span",
    variant = "md",
    className,
    children,
    ...props
}: TextProps) {
    const classes = `${variant} ${className ? className : ""}`;
    return React.createElement(
        as,
        { className: classes, ...props },
        children
    )
}