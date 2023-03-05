import { Button } from "@mui/material";
import React, { useState } from "react";
import { TColorRoll, COLORS, TNumRoll, TRoll } from "../typesAndConsts";
import { randomInt } from "../util/util";
import ColorDie from "./colorDie";
import NumberDieIcons from "./numberDieIcons";

const Dice = () => {
  const [rolls, setRolls] = useState<TRoll[]>([]);

  const latestRoll = rolls.length > 0 && rolls[rolls.length - 1];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "750px",
          maxWidth: "1000px",
          width: "55%",
          marginRight: "50px",
        }}
      >
        <NumberDieIcons value={latestRoll.yellow} color={"yellow"} />
        <NumberDieIcons value={latestRoll.red} color={"red"} />
        <ColorDie color={latestRoll.color} />
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
