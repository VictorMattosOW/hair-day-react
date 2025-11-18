import type React from "react";
import type Icon from "../components/icon/icon";

export interface Horarios {
  title: string;
  horarios: Horario[];
}

interface Horario {
  horario: string;
  isAgendado: boolean;
}

export interface Agendamento {
  horario: string;
  cliente: string;
  id?: string;
}

export interface Agenda {
  periodo: string;
  horarios: string;
  icon: React.ComponentProps<typeof Icon>["svg"];
  agendamento: Agendamento[];
}
