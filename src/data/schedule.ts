export type Modality = "Jiu-Jitsu Adulto" | "Jiu-Jitsu Kids" | "Muay-Thai";

export type DayKey =
  | "Segunda"
  | "Terça"
  | "Quarta"
  | "Quinta"
  | "Sexta"
  | "Sábado";

export interface ClassSlot {
  day: DayKey;
  start: string; // "HH:MM"
  end: string;   // "HH:MM"
  modality: Modality;
}

export const MODALITIES: Modality[] = [
  "Jiu-Jitsu Adulto",
  "Jiu-Jitsu Kids",
  "Muay-Thai",
];

export const DAYS: DayKey[] = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export const SCHEDULE: ClassSlot[] = [
  { day: "Segunda", start: "06:00", end: "07:00", modality: "Jiu-Jitsu Adulto" },
  { day: "Segunda", start: "18:30", end: "19:30", modality: "Jiu-Jitsu Kids" },
  { day: "Segunda", start: "19:30", end: "21:00", modality: "Jiu-Jitsu Adulto" },

  { day: "Terça", start: "19:00", end: "20:00", modality: "Muay-Thai" },
  { day: "Terça", start: "20:15", end: "21:30", modality: "Jiu-Jitsu Adulto" },

  { day: "Quarta", start: "06:00", end: "07:00", modality: "Jiu-Jitsu Adulto" },
  { day: "Quarta", start: "18:30", end: "19:30", modality: "Jiu-Jitsu Kids" },
  { day: "Quarta", start: "19:30", end: "21:00", modality: "Jiu-Jitsu Adulto" },

  { day: "Quinta", start: "19:00", end: "20:00", modality: "Muay-Thai" },
  { day: "Quinta", start: "20:15", end: "21:30", modality: "Jiu-Jitsu Adulto" },

  { day: "Sexta", start: "19:30", end: "21:00", modality: "Jiu-Jitsu Adulto" },

  { day: "Sábado", start: "09:00", end: "10:00", modality: "Jiu-Jitsu Adulto" },
];
