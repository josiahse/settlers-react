import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { DIE_SIZE, TNumRoll } from "../typesAndConsts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type TProps = { value: TNumRoll; color: string };

const DIE_ICONS: Record<number, IconProp> = {
  1: solid("dice-one"),
  2: solid("dice-two"),
  3: solid("dice-three"),
  4: solid("dice-four"),
  5: solid("dice-five"),
  6: solid("dice-six"),
};

const NumberDieIcons = ({ value, color }: TProps) => {
  return (
    <span className="fa-stack">
      <FontAwesomeIcon
        className="fa-stack-1x"
        color={color === "yellow" ? "rgb(237, 222, 64)" : color}
        icon={DIE_ICONS[value]}
        style={{ zIndex: 15, fontSize: DIE_SIZE }}
      />
      <FontAwesomeIcon
        className="fa-stack-1x"
        icon={solid("square")}
        color="white"
        style={{ fontSize: "240px", marginLeft: "10px" }}
      />
    </span>
  );
};

export default NumberDieIcons;
