import Card from "../../components/card/card";
import InputCalendar from "../../components/input-calendar/input-calendar";
import InputText from "../../components/input-text/input-text";
import Text from "../../components/text";
import type { Horarios } from "../../models/horarios";
import DisplayHorarios from "../display-horarios/display-horarios";
import style from "./style.module.css";
import UserIcon from "../../assets/UserSquare.svg?react";
import Button from "../../components/button/button";
import React, { useState } from "react";
import useAppointments from "../../hooks/use-agendamento";
import {
  HORARIOS_MANHA,
  HORARIOS_NOITE,
  HORARIOS_TARDE,
} from "../../utils/horarios";

export default function Form() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedHorario, setSelectedHorario] = useState<string>("");
  const [cliente, setCliente] = useState<string>("");
  const { addAppointment, isTimeSlotBooked } = useAppointments();

  const isDateEmpty = !selectedDate;
  console.log(isDateEmpty, selectedDate);

  const isButtonDisabled = !selectedDate || !selectedHorario || !cliente.trim();

  function handleCalendar(e: React.ChangeEvent<HTMLInputElement>) {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedHorario("");
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
      cliente: cliente,
      date: selectedDate,
      horario: selectedHorario,
    });

    setSelectedHorario("");
    setSelectedDate("");
    setCliente("");
  }

  const manha: Horarios = {
    title: "Manhã",
    horarios: HORARIOS_MANHA.map((horario) => ({
      horario,
      isAgendado: selectedDate
        ? isTimeSlotBooked(selectedDate, horario)
        : false,
    })),
  };

  const tarde: Horarios = {
    title: "Manhã",
    horarios: HORARIOS_TARDE.map((horario) => ({
      horario,
      isAgendado: selectedDate
        ? isTimeSlotBooked(selectedDate, horario)
        : false,
    })),
  };

  const noite: Horarios = {
    title: "Manhã",
    horarios: HORARIOS_NOITE.map((horario) => ({
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
      <form onSubmit={handleSubmit} className={style.form_base}>
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
            onChange={handleClienteChange}
            icon={UserIcon}
            value={cliente}
            placeholder="Helen Souza"
          />
        </div>
        <Button
          type="submit"
          disabled={isButtonDisabled}
          className={style.button_size}
        >
          AGENDAR
        </Button>
      </form>
    </Card>
  );
}
