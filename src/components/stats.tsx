import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { TRoll } from "../typesAndConsts";

import Chart from "./chart";

interface TProps {
  rolls: TRoll[];
}

const Stats = ({ rolls }: TProps) => {
  const length = rolls?.length ?? 0;
  const expectedNums: Record<number, number> = {
    2: 1 * length,
    3: 2 * length,
    4: 3 * length,
    5: 4 * length,
    6: 5 * length,
    7: 6 * length,
    8: 5 * length,
    9: 4 * length,
    10: 3 * length,
    11: 2 * length,
    12: 1 * length,
  };

  const numResults: Record<number, number> = {
    2: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
  };

  rolls.forEach(roll => numResults[roll.red + roll.yellow]++);

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
      <Chart numResults={numResults} expectedNums={expectedNums} />
      <Button variant="contained">
        <Link to="/play">Back to roller</Link>
      </Button>
    </div>
  );
};

export default Stats;
