import Container from "../../components/container/container";
import InputCalendar from "../../components/input-calendar/input-calendar";
import Text from "../../components/text";
import type { Agenda } from "../../models/horarios";
import CardAgenda from "../card-agenda/card-agenda";
import style from "./style.module.css";
import ManhaIcon from "../../assets/CloudSun.svg?react";
import CloudSunIcon from "../../assets/CloudSun.svg?react";
import MoonStarsIcon from "../../assets/MoonStars.svg?react";

const manha: Agenda = {
  periodo: "Manhã",
  horarios: "09h-12h",
  icon: ManhaIcon,
  agendamento: [
    {
      horario: "09:00",
      cliente: "Marcos vinicius",
    },
  ],
};

const tarde: Agenda = {
  periodo: "Tarde",
  horarios: "13h-18h",
  icon: CloudSunIcon,
  agendamento: [
    {
      horario: "09:00",
      cliente: "Marcos vinicius",
    },
  ],
};

const noite: Agenda = {
  periodo: "Manhã",
  horarios: "19h-21h",
  icon: MoonStarsIcon,
  agendamento: [
    {
      horario: "09:00",
      cliente: "Marcos vinicius",
    },
  ],
};

export default function DisplayAgenda() {
  return (
    <Container as="section" className={style.base}>
      <div className={style.wrapper}>
        <header className={style.header}>
          <div>
            <Text as="h2" variant="title-lg">
              Sua Agenda
            </Text>
            <Text as="span" variant="sm">
              Consulte os seus cortes de cabelo agendados por dia
            </Text>
          </div>
          <InputCalendar className={style.calendar} />
        </header>
        <CardAgenda agenda={manha} />
        <CardAgenda agenda={tarde} />
        <CardAgenda agenda={noite} />
      </div>
    </Container>
  );
}
