import { Button, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

type TProps = {
  players: string[];
  setPlayers: Dispatch<SetStateAction<string[]>>;
};

const GameSetup = ({ players, setPlayers }: TProps) => {
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    setPlayers(prev => [...prev, input]);
    setInput("");
  };

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
        <p key={i}>{`${i + 1}: ${player}`}</p>
      ))}
      <TextField
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ padding: "1em" }}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add Player
      </Button>
      <Button>
        <Link to="/play" state={{ players }}>
          Finish Setup
        </Link>
      </Button>
    </div>
  );
};

export default GameSetup;
