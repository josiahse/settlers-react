import React from "react";
import { range } from "lodash";

type TProps = { barb: number };

const BarbProgress = ({ barb }: TProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "600px",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      {range(8).map(i => (
        <div
          style={{
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            backgroundColor: i === barb ? "black" : "white",
          }}
        ></div>
      ))}
    </div>
  );
};

export default BarbProgress;
