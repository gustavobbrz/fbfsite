export type CompetitionStatus = "active" | "upcoming" | "finished";

export type CompetitionType =
  | "principal"
  | "copa"
  | "semanal"
  | "aspirantes"
  | "urun"
  | "pre-temporada"
  | "x1";

export interface Competition {
  id: string;
  name: string;
  image: string;
  description: string;
  route: string;
  status: CompetitionStatus;
  startDate?: string;
  teamsCount?: number;
  type: CompetitionType;
}
