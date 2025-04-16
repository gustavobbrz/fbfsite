import { FaTrophy, FaCalendar, FaNewspaper, FaFutbol } from "react-icons/fa"; // Assuming these icons are used
import type { FeatureProps } from "../types"; // Use central types export

export const features: FeatureProps[] = [
  {
    icon: FaTrophy,
    title: "Competições",
    description: "Participe dos nossos campeonatos e torneios exclusivos.",
  },
  {
    icon: FaCalendar,
    title: "Calendário",
    description: "Fique por dentro de todas as datas e horários dos jogos.",
  },
  {
    icon: FaNewspaper,
    title: "Notícias",
    description: "Leia as últimas novidades e atualizações da FBF.",
  },
  // Add other features if they exist, e.g.:
  // {
  //   icon: FaFutbol,
  //   title: "Resultados",
  //   description: "Confira os placares e estatísticas das partidas.",
  // },
];
