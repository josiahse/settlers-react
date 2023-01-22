export const COLORS = ["black", "black", "black", "yellow", "green", "blue"];

export type TNumRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type TColorRoll = "yellow" | "green" | "blue" | "black";
export type TRoll = {
  yellow: TNumRoll;
  red: TNumRoll;
  color: TColorRoll;
};
