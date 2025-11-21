import { createContext, useContext, useState, type ReactNode } from "react";

export interface Appointment {
  id: string;
  date: string; // YYYY-MM-DD format
  horario: string; // HH:MM format
  cliente: string;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  deleteAppointment: (id: string) => void;
  getAppointmentsByDate: (date: string) => Appointment[];
  isTimeSlotBooked: (date: string, horario: string) => boolean;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(
  undefined
);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointment: Omit<Appointment, "id">) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: `${appointment.date}-${appointment.horario}-${Date.now()}`,
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  };

  const getAppointmentsByDate = (date: string): Appointment[] => {
    return appointments.filter((apt) => apt.date === date);
  };

  const isTimeSlotBooked = (date: string, horario: string): boolean => {
    return appointments.some(
      (apt) => apt.date === date && apt.horario === horario
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        deleteAppointment,
        getAppointmentsByDate,
        isTimeSlotBooked,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error(
      "useAppointments must be used within an AppointmentProvider"
    );
  }
  return context;
}
