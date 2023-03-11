import { IconButton, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { isUndefined } from "lodash";

interface TProps {
  player?: string;
  index?: number;
  setPlayers: Dispatch<SetStateAction<string[]>>;
}

const NameField = ({ player, index, setPlayers }: TProps) => {
  const [input, setInput] = useState<string>(player ?? "");

  const handleRemove = () => {
    setPlayers(prev => {
      if (isUndefined(index)) return prev;
      const newPlayers = [...prev];
      newPlayers.splice(index, 1);
      return newPlayers;
    });
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter")
      setPlayers(prev => {
        const newPlayers = [...prev];
        if (!isUndefined(index)) newPlayers[index] = input;
        else {
          newPlayers.push(input);
          setInput("");
        }
        return newPlayers;
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "300px",
      }}
    >
      <div>
        <FontAwesomeIcon
          icon={solid("arrows-up-down")}
          style={{ cursor: "pointer", padding: "5px" }}
        />
      </div>
      <TextField
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ padding: "1em" }}
        onKeyDown={handleEnter}
      />
      {!isUndefined(index) && (
        <IconButton onClick={handleRemove}>
          <FontAwesomeIcon icon={solid("trash")} />
        </IconButton>
      )}
    </div>
  );
};

export default NameField;
