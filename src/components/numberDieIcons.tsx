import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { TNumRoll } from "../typesAndConsts";
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
    <div style={{ fontSize: 150 }}>
      {<FontAwesomeIcon size="lg" color={color} icon={DIE_ICONS[value]} />}
    </div>
  );
};

export default NumberDieIcons;
