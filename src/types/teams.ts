export interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  photo?: string;
  stats: {
    games: number;
    goals: number;
    assists: number;
  };
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  division: string;
  founded: string;
  titles: {
    fbfPrincipal: number;
    copaFbf: number;
    total: number;
  };
  players: Player[];
  staff: {
    name: string;
    role: string;
  }[];
  achievements: string[];
}
