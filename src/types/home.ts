import type { IconType } from "react-icons";

export interface FeatureProps {
  icon: IconType; // Use IconType for better type safety
  title: string;
  description: string;
}
