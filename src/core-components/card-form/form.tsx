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
import { useAppointments } from "../../context/AppointmentContext";

const MANHA_HORARIOS = ["09:00", "10:00", "11:00", "12:00"];
const TARDE_HORARIOS = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const NOITE_HORARIOS = ["19:00", "20:00", "21:00"];

export default function Form() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedHorario, setSelectedHorario] = useState<string>("");
  const [cliente, setCliente] = useState<string>("");
  const { addAppointment, isTimeSlotBooked } = useAppointments();

  const isDateEmpty = !selectedDate;

  function handleCalendar(e: React.ChangeEvent<HTMLInputElement>) {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedHorario(""); // Reset selected time when date changes
  }

  function handleHorarioSelect(horario: string) {
    setSelectedHorario(horario);
  }

  function handleClienteChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCliente(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!selectedDate || !selectedHorario || !cliente.trim()) {
      return;
    }

    addAppointment({
      date: selectedDate,
      horario: selectedHorario,
      cliente: cliente.trim(),
    });

    // Reset form
    setSelectedHorario("");
    setCliente("");
  }

  // Generate time slots for each period based on selected date
  const manha: Horarios = {
    title: "Manhã",
    horarios: MANHA_HORARIOS.map((horario) => ({
      horario,
      isAgendado: selectedDate
        ? isTimeSlotBooked(selectedDate, horario)
        : false,
    })),
  };

  const tarde: Horarios = {
    title: "Tarde",
    horarios: TARDE_HORARIOS.map((horario) => ({
      horario,
      isAgendado: selectedDate
        ? isTimeSlotBooked(selectedDate, horario)
        : false,
    })),
  };

  const noite: Horarios = {
    title: "Noite",
    horarios: NOITE_HORARIOS.map((horario) => ({
      horario,
      isAgendado: selectedDate
        ? isTimeSlotBooked(selectedDate, horario)
        : false,
    })),
  };

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
      <form className={style.form_base} onSubmit={handleSubmit}>
        <div className={style.base}>
          <Text as="span" variant="title-md">
            Data
          </Text>
          <InputCalendar value={selectedDate} onChange={handleCalendar} />
        </div>
        <div className={style.base}>
          <Text as="span" variant="title-md">
            Horários
          </Text>
          <div className={style.base}>
            <DisplayHorarios
              dia={manha}
              disabled={isDateEmpty}
              selectedHorario={selectedHorario}
              onHorarioSelect={handleHorarioSelect}
            />
            <DisplayHorarios
              dia={tarde}
              disabled={isDateEmpty}
              selectedHorario={selectedHorario}
              onHorarioSelect={handleHorarioSelect}
            />
            <DisplayHorarios
              dia={noite}
              disabled={isDateEmpty}
              selectedHorario={selectedHorario}
              onHorarioSelect={handleHorarioSelect}
            />
          </div>
        </div>
        <div className={style.base}>
          <Text variant="title-md" as="span">
            Cliente
          </Text>
          <InputText
            icon={UserIcon}
            placeholder="Helen Souza"
            value={cliente}
            onChange={handleClienteChange}
          />
        </div>
        <Button
          type="submit"
          className={style.button_size}
          disabled={!selectedDate || !selectedHorario || !cliente.trim()}
        >
          AGENDAR
        </Button>
      </form>
    </Card>
  );
}
