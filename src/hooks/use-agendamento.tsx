import { useState } from "react";
import type { Appointment } from "../models/appointments";

export default function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function addAppointment(appointment: Omit<Appointment, "id">) {
    const newAppointment: Appointment = {
      ...appointment,
      id: `${appointment.horario}-${appointment.horario}-${Date.now}`,
    };

    setAppointments((prev) => [...prev, newAppointment]);
  }

  function isTimeSlotBooked(date: string, horario: string): boolean {
    return appointments.some(
      (apt) => apt.date === date && apt.horario === horario
    );
  }

  function getAppointmentsByDate(date: string): Appointment[] {
    return appointments.filter((apt) => apt.date === date);
  }

  return {
    appointments,
    addAppointment,
    isTimeSlotBooked,
    getAppointmentsByDate,
  };
}
