import React, { ReactNode, SetStateAction, useState } from "react";
import { Player } from "../types/PlayerType";
import PlayerInput from "./PlayerInput";
import styled from "styled-components";

//Create a state with a players object
//Change players state from array of strings to array of player objects using interface
//Post players to database

interface PlayerCreationProps {
  setIsGameStarted: React.Dispatch<SetStateAction<boolean>>;
}

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(icons/background_tile.png);
`;

const CovatarsLogo = styled.img`
  width:20vw;
  height: auto;
`

const PlayerCreation = ({setIsGameStarted}: PlayerCreationProps) => {
  const [step, setStep] = useState("PlayerNumberInput");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);

  const handleNumOfPlayersSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return numOfPlayers >= 2 && numOfPlayers <= 8
      ? setStep("PlayerCreation")
      : null;
  };

  const handleNumOfPlayersOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target: number = +e.target.value;
    setNumOfPlayers(target-1);
  };

  const renderPlayerInputs = (numOfPlayers: number) => {
    const playerInputs = [];
    for (let i = 0; i <= numOfPlayers; i++) {
      playerInputs.push(<PlayerInput key={i} playerNum={i} players={players} setPlayers={setPlayers} />);
    }
    return playerInputs;
  };

  const handleOnClick = (step: string): void => {
    setStep(step);
  };
  

  return (
    <MainWrapper>
      <CovatarsLogo src="icons/covatars_logo.png"/>
      {step !== "Game" && (
        <button onClick={() => handleOnClick("Scoreboard")}>Scoreboard</button>
      )}
      {step === "PlayerNumberInput" && (
        <form onSubmit={handleNumOfPlayersSubmit}>
          <h2>Insert number of players</h2>
          <input
            name="numOfPlayers"
            type="numOfPlayers"
            onChange={handleNumOfPlayersOnChange}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      )}
      {step === "PlayerCreation" && (
        <div>
          <h3>Create Players</h3>
          <div>{renderPlayerInputs(numOfPlayers)}</div>
          <div>
            <button onClick={() => setIsGameStarted(true)}>Start</button>
          </div>
        </div>
      )}
      {step === "Scoreboard" && (
        <div>
          <h3>No scores recorded</h3>
          <button onClick={() => handleOnClick("PlayerNumberInput")}>
            Home
          </button>
        </div>
      )}
    </MainWrapper>
  );
};

export default PlayerCreation;
