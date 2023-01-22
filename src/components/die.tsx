import React from "react";
import { TNumRoll } from "../typesAndConsts";
import NumberDieIcons from "./numberDieIcons";

type TProps = {
  value: string | TNumRoll;
  variant: "yellow" | "red" | "color";
};

const Die = ({ value, variant }: TProps) => {
  switch (variant) {
    case "yellow": {
      return <NumberDieIcons value={value as TNumRoll} color={variant} />;
    }
    case "red": {
      return <NumberDieIcons value={value as TNumRoll} color={variant} />;
    }
    case "color": {
      return;
    }
  }
};

export default Die;
