import type React from "react";
import style from "./style.module.css"

interface IconProps extends React.ComponentProps<"svg">{
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({svg: SvgComponent, className ,...props }: IconProps) {
    return (
        <SvgComponent {...props} className={`${style.base} ${className}`} />
    )
}