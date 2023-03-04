import { Button } from "@mui/material";
import React, { useState } from "react";
import { TColorRoll, COLORS, TNumRoll, TRoll } from "../typesAndConsts";
import { randomInt } from "../util/util";
import Die from "./die";

const Dice = () => {
  const [rolls, setRolls] = useState<TRoll[]>([]);

  const latestRoll = rolls.length > 0 && rolls[rolls.length - 1];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "75%",
        }}
      >
        <Die value={latestRoll?.yellow ?? ""} variant="yellow" />
        <Die value={latestRoll?.red ?? ""} variant="red" />
        <Die value={latestRoll?.color ?? ""} variant="color" />
      </div>
      <Button
        variant="contained"
        onClick={() =>
          setRolls(rolls => [
            ...rolls,
            {
              yellow: randomInt(6) as TNumRoll,
              red: randomInt(6) as TNumRoll,
              color: COLORS[randomInt(6) - 1] as TColorRoll,
            },
          ])
        }
      >
        Roll Dice
      </Button>
    </div>
  );
};

export default Dice;
