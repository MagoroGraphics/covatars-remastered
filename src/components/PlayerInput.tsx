import { Player } from "../types/PlayerType";
import React, { useState, SetStateAction } from "react";


interface PlayerInputProps {
  playerNum: number;
  players: string[];
  setPlayers: (players: string[]) => void;
}

const PlayerInput = ({ playerNum, players, setPlayers }: PlayerInputProps) => {
  const [playerName, setPlayerName] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: string = e.target.value;
    setPlayerName(target);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let playerList = [...players];
    playerList.push(playerName);
    setIsCreated(true);
    return setPlayers(playerList);
  };

  return (
    <>
      {!isCreated ? (
        <form>
          <label>Player {playerNum + 1}</label>
          <input onChange={handleOnChange}></input>
          <button onClick={handleSubmit}>Create</button>
        </form>
      ) : (
        <h3>{playerName}</h3>
      )}
    </>
  );
};

export default PlayerInput;
