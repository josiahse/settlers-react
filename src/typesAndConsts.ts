export const COLORS = ["black", "black", "black", "yellow", "green", "blue"];
export const DIE_SIZE = "250px";

export type TNumRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type TColorRoll = "yellow" | "green" | "blue" | "black";
export type TRoll = {
  yellow: TNumRoll;
  red: TNumRoll;
  color: TColorRoll;
};
