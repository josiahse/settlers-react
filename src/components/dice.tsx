import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS, TNumRoll, TRoll } from "../typesAndConsts";
import { randomInt } from "../util/util";
import BarbProgress from "./barbProgress";
import ColorDie from "./colorDie";
import NumberDieIcons from "./numberDieIcons";

type TProps = { players: string[] };

const Dice = ({ players }: TProps) => {
  const [rolls, setRolls] = useState<TRoll[]>([]);
  const [barb, setBarb] = useState<number>(0);
  const [turn, setTurn] = useState<number>(0);
  const [barbMsg, setBarbMsg] = useState<boolean>(false);

  const latestRoll: TRoll =
    rolls.length > 0
      ? rolls[rolls.length - 1]
      : { yellow: 1, red: 6, color: "black" };

  const handleRoll = () => {
    setTurn(t => t + 1);
    setBarbMsg(false);
    const colorRoll = COLORS[randomInt(6) - 1];
    if (colorRoll === "black") {
      if (barb + 1 === 7) {
        setBarb(0);
        setBarbMsg(true);
      } else setBarb(barb + 1);
    }
    setRolls(rolls => [
      ...rolls,
      {
        yellow: randomInt(6) as TNumRoll,
        red: randomInt(6) as TNumRoll,
        color: colorRoll,
      },
    ]);
  };

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
      <p style={{ border: "1px solid red" }}>
        {players?.length > 0 && `${players[turn % players.length]}'s turn`}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "750px",
          maxWidth: "1000px",
          width: "55%",
          height: "300px",
          marginRight: "270px",
        }}
      >
        <NumberDieIcons value={latestRoll.yellow} color={"yellow"} />
        <NumberDieIcons value={latestRoll.red} color={"red"} />
        <ColorDie color={latestRoll.color} />
      </div>
      <BarbProgress barb={barb} />
      <p style={{ height: "30px" }}>
        {barbMsg ? "The barbarians strike!" : ""}
      </p>
      <Button variant="contained" onClick={handleRoll}>
        Roll Dice
      </Button>
      <Button>
        <Link to="/" state={{ players }}>
          Back to Setup
        </Link>
      </Button>
    </div>
  );
};

export default Dice;
