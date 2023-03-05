import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DIE_SIZE, TColorRoll } from "../typesAndConsts";

type TProps = { color: TColorRoll };

const ColorDie = ({ color }: TProps) => {
  return (
    <FontAwesomeIcon
      icon={solid("square")}
      color={color === "yellow" ? "rgb(237, 222, 64)" : color}
      fontSize={DIE_SIZE}
      style={{ marginLeft: "45px" }}
    />
  );
};

export default ColorDie;
