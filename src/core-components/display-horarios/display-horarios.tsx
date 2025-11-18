import type React from "react";
import type { Horarios } from "../../models/horarios";
import style from "./style.module.css";
import Text from "../../components/text";
import SelectTime from "../../components/select/select";

interface DisplayProps extends React.ComponentProps<"div"> {
  dia: Horarios;
  disabled: boolean;
}

export default function DisplayHorarios({ dia, disabled }: DisplayProps) {
  let x = 1;
  return (
    <div className={style.base}>
      <Text as="span" variant="md">
        {dia.title}
      </Text>
      <div className={style.horarios}>
        {dia.horarios.map((h) => (
          <SelectTime
            disabled={disabled || h.isAgendado}
            key={`${dia.title}${x++}`}
          >
            {h.horario}
          </SelectTime>
        ))}
      </div>
    </div>
  );
}
