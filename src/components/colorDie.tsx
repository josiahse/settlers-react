import React from "react";

type TProps = { color: string };

const ColorDie = ({ color }: TProps) => {
  return (
    <div
      style={{
        height: "170px",
        width: "170px",
        borderRadius: "13%",
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorDie;
