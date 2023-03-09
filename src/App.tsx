import React, { useState } from "react";
import Dice from "./components/dice";
import "./App.css";
import { CssBaseline } from "@mui/material";
import GameSetup from "./components/gameSetup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<GameSetup players={players} setPlayers={setPlayers} />}
          />
          <Route path="play" element={<Dice players={players} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
