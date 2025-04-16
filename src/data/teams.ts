// Sample team data - replace with actual data later
interface Player {
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

interface Team {
  id: number;
  name: string;
  logo: string; // URL or path to logo
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

export const teams: Team[] = [
  {
    id: 1,
    name: "Águia Dourada FC",
    logo: "/images/logos/aguia_dourada.png", // Example path
    division: "Série A",
    founded: "1985",
    titles: { fbfPrincipal: 5, copaFbf: 2, total: 7 },
    players: [
      {
        id: 101,
        name: "Carlos Silva",
        number: "10",
        position: "Atacante",
        photo: "/images/players/carlos_silva.jpg",
        stats: { games: 25, goals: 15, assists: 8 },
      },
      {
        id: 102,
        name: "Bruno Costa",
        number: "5",
        position: "Meio-campo",
        stats: { games: 28, goals: 3, assists: 12 },
      },
    ],
    staff: [
      { name: "Ricardo Lima", role: "Técnico" },
      { name: "Ana Souza", role: "Fisioterapeuta" },
    ],
    achievements: ["Campeão FBF Principal 2023", "Campeão Copa FBF 2022"],
  },
  {
    id: 2,
    name: "Tubarões Azuis SC",
    logo: "/images/logos/tubaroes_azuis.png", // Example path
    division: "Série A",
    founded: "1992",
    titles: { fbfPrincipal: 3, copaFbf: 4, total: 7 },
    players: [
      {
        id: 201,
        name: "Fernando Alves",
        number: "9",
        position: "Atacante",
        stats: { games: 30, goals: 22, assists: 5 },
      },
      {
        id: 202,
        name: "Lucas Martins",
        number: "1",
        position: "Goleiro",
        photo: "/images/players/lucas_martins.jpg",
        stats: { games: 30, goals: 0, assists: 0 },
      },
    ],
    staff: [{ name: "Jorge Mendes", role: "Técnico" }],
    achievements: ["Vice-campeão FBF Principal 2023", "Campeão Copa FBF 2021"],
  },
  {
    id: 3,
    name: "Leões da Serra FC",
    logo: "/images/logos/leoes_serra.png", // Example path
    division: "Série B",
    founded: "2001",
    titles: { fbfPrincipal: 0, copaFbf: 1, total: 1 },
    players: [
      {
        id: 301,
        name: "Rafael Oliveira",
        number: "7",
        position: "Meio-campo",
        stats: { games: 20, goals: 5, assists: 10 },
      },
    ],
    staff: [{ name: "Marcos Andrade", role: "Técnico" }],
    achievements: ["Campeão Série B 2022"],
  },
  // Add more teams as needed
];
