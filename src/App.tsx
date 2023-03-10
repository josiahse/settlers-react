import React, { useState } from "react";
import Dice from "./components/dice";
import "./App.css";
import { CssBaseline } from "@mui/material";
import GameSetup from "./components/gameSetup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TRoll } from "./typesAndConsts";
import Stats from "./components/stats";

const App = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [rolls, setRolls] = useState<TRoll[]>([]);

  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<GameSetup players={players} setPlayers={setPlayers} />}
          />
          <Route
            path="play"
            element={
              <Dice players={players} rolls={rolls} setRolls={setRolls} />
            }
          />
          <Route path="stats" element={<Stats rolls={rolls} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
