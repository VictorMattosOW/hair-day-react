import Container from "../../components/container/container";
import InputCalendar from "../../components/input-calendar/input-calendar";
import Text from "../../components/text";
import type { Agenda } from "../../models/horarios";
import CardAgenda from "../card-agenda/card-agenda";
import style from "./style.module.css";
import ManhaIcon from "../../assets/CloudSun.svg?react";
import CloudSunIcon from "../../assets/CloudSun.svg?react";
import MoonStarsIcon from "../../assets/MoonStars.svg?react";
import { useState, useMemo } from "react";
import { useAppointments } from "../../context/AppointmentContext";
import type { Appointment } from "../../context/AppointmentContext";

const MANHA_HORARIOS = ["09:00", "10:00", "11:00", "12:00"];
const TARDE_HORARIOS = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const NOITE_HORARIOS = ["19:00", "20:00", "21:00"];

function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function filterAppointmentsByPeriod(
  appointments: Appointment[],
  periodHorarios: string[]
): Appointment[] {
  return appointments.filter((apt) => periodHorarios.includes(apt.horario));
}

export default function DisplayAgenda() {
  const [selectedDate, setSelectedDate] = useState<string>(getTodayDate());
  const { getAppointmentsByDate } = useAppointments();

  const appointments = useMemo(
    () => getAppointmentsByDate(selectedDate),
    [selectedDate, getAppointmentsByDate]
  );

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedDate(e.target.value || getTodayDate());
  }

  const manhaAppointments = useMemo(
    () => filterAppointmentsByPeriod(appointments, MANHA_HORARIOS),
    [appointments]
  );

  const tardeAppointments = useMemo(
    () => filterAppointmentsByPeriod(appointments, TARDE_HORARIOS),
    [appointments]
  );

  const noiteAppointments = useMemo(
    () => filterAppointmentsByPeriod(appointments, NOITE_HORARIOS),
    [appointments]
  );

  const manha: Agenda = {
    periodo: "Manhã",
    horarios: "09h-12h",
    icon: ManhaIcon,
    agendamento: manhaAppointments.map((apt) => ({
      horario: apt.horario,
      cliente: apt.cliente,
      id: apt.id,
    })),
  };

  const tarde: Agenda = {
    periodo: "Tarde",
    horarios: "13h-18h",
    icon: CloudSunIcon,
    agendamento: tardeAppointments.map((apt) => ({
      horario: apt.horario,
      cliente: apt.cliente,
      id: apt.id,
    })),
  };

  const noite: Agenda = {
    periodo: "Noite",
    horarios: "19h-21h",
    icon: MoonStarsIcon,
    agendamento: noiteAppointments.map((apt) => ({
      horario: apt.horario,
      cliente: apt.cliente,
      id: apt.id,
    })),
  };

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
          <InputCalendar
            className={style.calendar}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </header>
        <CardAgenda agenda={manha} />
        <CardAgenda agenda={tarde} />
        <CardAgenda agenda={noite} />
      </div>
    </Container>
  );
}
