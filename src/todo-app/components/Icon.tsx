import { createElement } from "react";
import { IconChurch } from "./IconChurch";
import { IconFootball } from "./IconFootball";
import { IconAirplane } from "./IconAirplane";
import { IconWorkout } from "./IconWorkout";
import { IconLaptop } from "./IconLaptop";
import { IconFix } from "./IconFix";

export type IndividualIconProps = Omit<IconProps, "name">;

export interface IconProps {
  name: keyof typeof iconRegistry;
  size?: number;
  fill?: string;
  stroke?: string;
}

export function Icon({ name, fill, size, stroke }: IconProps) {
  return createElement(iconRegistry[name], {
    fill: fill ?? "white",
    stroke: stroke ?? "white",
    size: size ?? 32,
  });
}

const iconRegistry = {
  church: IconChurch,
  football: IconFootball,
  airplane: IconAirplane,
  workout: IconWorkout,
  laptop: IconLaptop,
  fix: IconFix,
};
