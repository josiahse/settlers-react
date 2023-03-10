import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DIE_SIZE, TColorRoll } from "../typesAndConsts";

interface TProps {
  color: TColorRoll;
}

const ColorDie = ({ color }: TProps) => {
  return (
    <span className="fa-stack">
      <FontAwesomeIcon
        className="fa-stack-1x"
        color={color === "yellow" ? "rgb(237, 222, 64)" : color}
        icon={color === "black" ? solid("sailboat") : solid("chess-rook")}
        fontSize="140px"
        style={{ zIndex: 15, marginLeft: "70px" }}
      />
      <FontAwesomeIcon
        className="fa-stack-1x"
        icon={solid("square")}
        color="#E3E6E5"
        fontSize={DIE_SIZE}
        style={{ fontSize: DIE_SIZE }}
      />
    </span>
  );
};

export default ColorDie;
