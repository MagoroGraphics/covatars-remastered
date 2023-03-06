import { Player } from "../types/PlayerType";
import React, { useState, SetStateAction } from "react";
import Button from "./Button";
import styled from "styled-components";

interface PlayerInputProps {
  playerNum: number;
  players: string[];
  setPlayers: (players: string[]) => void;
}

const PlayerInput = ({ playerNum, players, setPlayers }: PlayerInputProps) => {

const StyledInput = styled.input`
  border-radius: 1vh;
  box-shadow: 5px;
`

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
          <StyledInput onChange={handleOnChange}></StyledInput>
          <Button onClick={handleSubmit} text={"Create"}/>
        </form>
      ) : (
        <h3>{playerName}</h3>
      )}
    </>
  );
};

export default PlayerInput;
