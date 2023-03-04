import React from "react";
import Dice from "./components/dice";
import "./App.css";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Dice />
    </div>
  );
};

export default App;
