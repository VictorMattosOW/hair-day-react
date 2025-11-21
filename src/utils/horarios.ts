export const HORARIOS_MANHA = ["09:00", "10:00", "11:00", "12:00"];
export const HORARIOS_TARDE = [
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
export const HORARIOS_NOITE = ["19:00", "20:00", "21:00"];

export function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
