import type React from "react";
import type { Horarios } from "../../models/horarios";
import style from "./style.module.css";
import Text from "../../components/text";
import SelectTime from "../../components/select/select";

interface DisplayProps extends React.ComponentProps<"div"> {
  dia: Horarios;
  disabled: boolean;
  selectedHorario?: string;
  onHorarioSelect?: (horario: string) => void;
}

export default function DisplayHorarios({
  dia,
  disabled,
  selectedHorario,
  onHorarioSelect,
}: DisplayProps) {
  let x = 1;

  function handleHorarioClick(horario: string, isAgendado: boolean) {
    if (!disabled && !isAgendado && onHorarioSelect) {
      onHorarioSelect(horario);
    }
  }

  return (
    <div className={style.base}>
      <Text as="span" variant="md">
        {dia.title}
      </Text>
      <div className={style.horarios}>
        {dia.horarios.map((h) => {
          const isSelected = selectedHorario === h.horario;
          const isDisabled = disabled || h.isAgendado;
          return (
            <SelectTime
              disabled={isDisabled}
              key={`${dia.title}${x++}`}
              name="horario"
              onClick={() => handleHorarioClick(h.horario, h.isAgendado)}
              data-selected={isSelected}
            >
              {h.horario}
            </SelectTime>
          );
        })}
      </div>
    </div>
  );
}
