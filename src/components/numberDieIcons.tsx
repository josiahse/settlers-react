import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { TNumRoll } from "../typesAndConsts";

type TProps = { value: TNumRoll; color: string };

const NumberDieIcons = ({ value, color }: TProps) => {
  const getIcon = (value: number) => {
    switch (value) {
      case 1:
        return (
          <FontAwesomeIcon size="lg" color={color} icon={solid("dice-one")} />
        );

      case 2:
        return (
          <FontAwesomeIcon size="lg" color={color} icon={solid("dice-two")} />
        );

      case 3:
        return (
          <FontAwesomeIcon size="lg" color={color} icon={solid("dice-three")} />
        );

      case 4:
        return (
          <FontAwesomeIcon size="lg" color={color} icon={solid("dice-four")} />
        );

      case 5:
        return (
          <FontAwesomeIcon size="lg" color={color} icon={solid("dice-five")} />
        );

      case 6:
        return (
          <FontAwesomeIcon size="lg" color={color} icon={solid("dice-six")} />
        );
    }
  };

  return <div style={{ fontSize: 150 }}>{getIcon(value)}</div>;
};

export default NumberDieIcons;
