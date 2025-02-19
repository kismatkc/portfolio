import { clsx, type ClassValue } from "clsx";
import { FC, memo } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function CapitalizeFirstLetter(word: string) {
  return word
    .split("")
    .map((c, i) => {
      if (i === 0) return c.toUpperCase();
      return c.toLowerCase();
    })
    .join("");
}

export function memoizeComponent(fnc: FC) {
  return memo(fnc);
}
