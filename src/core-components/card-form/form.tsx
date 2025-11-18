import Card from "../../components/card/card";
import InputCalendar from "../../components/input-calendar/input-calendar";
import InputText from "../../components/input-text/input-text";
import Text from "../../components/text";
import type { Horarios } from "../../models/horarios";
import DisplayHorarios from "../display-horarios/display-horarios";
import style from "./style.module.css";
import UserIcon from "../../assets/UserSquare.svg?react";
import Button from "../../components/button/button";
import { useState } from "react";

const manha: Horarios = {
  title: "Manhã",
  horarios: [
    { horario: "09:00", isAgendado: false },
    { horario: "10:00", isAgendado: false },
    { horario: "11:00", isAgendado: true },
    { horario: "12:00", isAgendado: false },
  ],
};

// const tarde: Horarios = {
//   title: "Tarde",
//   horarios: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
// };
// const noite: Horarios = {
//   title: "Noite",
//   horarios: ["19:00", "20:00", "21:00"],
// };

export default function Form() {
  const [isDateEmpety, setIsDateEmpety] = useState(true);

  function handleCalendar(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value != null) {
      setIsDateEmpety(false);
    }
  }

  return (
    <Card as="aside" className={style.card}>
      <div className={style.title}>
        <Text as="h2" variant="title-lg">
          Agende um atendimento
        </Text>
        <Text as="span" variant="sm">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>
      <form className={style.form_base}>
        <div className={style.base}>
          <Text as="span" variant="title-md">
            Data
          </Text>
          <InputCalendar onChange={handleCalendar} />
        </div>
        <div className={style.base}>
          <Text as="span" variant="title-md">
            Horários
          </Text>
          <div className={style.base}>
            <DisplayHorarios dia={manha} disabled={isDateEmpety} />
            {/* <DisplayHorarios dia={tarde} disabled={isDateEmpety} />
            <DisplayHorarios dia={noite} disabled={isDateEmpety} /> */}
          </div>
        </div>
        <div className={style.base}>
          <Text variant="title-md" as="span">
            Cliente
          </Text>
          <InputText icon={UserIcon} placeholder="Helen Souza" />
        </div>
        <Button className={style.button_size}>AGENDAR</Button>
      </form>
    </Card>
  );
}
