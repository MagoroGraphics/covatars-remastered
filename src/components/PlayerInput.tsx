import { Player } from "../types/PlayerType";
import React, { useState, SetStateAction } from "react";

interface PlayerInputProps {
  playerNum: number;
  players: string[];
  setPlayers: (players: string[]) => void;
}

const PlayerInput = ({ playerNum, players, setPlayers }: PlayerInputProps) => {
  const [playerName, setPlayerName] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: string = e.target.value;
    setPlayerName(target);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let playerList = [...players];
    playerList.push(playerName);
    return setPlayers(playerList);
  };

  return (
    <form>
      <label>Player {playerNum + 1}</label>
      <input onChange={handleOnChange}></input>
      <button onClick={handleSubmit}>Create</button>
    </form>
  );
};

export default PlayerInput;
