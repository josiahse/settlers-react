import React from "react";
import Dice from "./components/dice";
import "./App.css";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CssBaseline />
        <Dice />
      </header>
    </div>
  );
};

export default App;
