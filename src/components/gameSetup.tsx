import { Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import NameField from "./nameField";

interface TProps {
  players: string[];
  setPlayers: Dispatch<SetStateAction<string[]>>;
}

const GameSetup = (props: TProps) => {
  const { players, setPlayers } = props;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {players.map((player, i) => (
        <NameField key={i} index={i} player={player} setPlayers={setPlayers} />
      ))}
      {players.length < 6 && <NameField setPlayers={setPlayers} />}
      <Button>
        <Link to="/play" state={{ players }}>
          Finish Setup
        </Link>
      </Button>
    </div>
  );
};

export default GameSetup;
