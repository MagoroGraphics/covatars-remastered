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
  width: 100%;
`;

const PlayerSelectionWrapper = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
`;

const PlayerNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlayerNumberButton = styled.img`
  margin: 20px 20px;
  cursor: pointer;
  min-width: 150px;
`;

const PlayerCreation = ({ setIsGameStarted }: PlayerCreationProps) => {
  const [step, setStep] = useState("PlayerNumberInput");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);

  const submitNumberOfPlayers = (number: number): void => {
    console.log("Number of players", number);
  };

  const renderPlayerInputs = (numOfPlayers: number) => {
    const playerInputs = [];
    for (let i = 0; i <= numOfPlayers; i++) {
      playerInputs.push(
        <PlayerInput
          key={i}
          playerNum={i}
          players={players}
          setPlayers={setPlayers}
        />
      );
    }
    return playerInputs;
  };

  const handleOnClick = (step: string): void => {
    setStep(step);
  };

  return (
    <MainWrapper>
      {step === "PlayerNumberInput" && (
        <PlayerSelectionWrapper>
          <h2>How many players?</h2>
          <PlayerNumberWrapper>
            <PlayerNumberButton
              src="icons/2-players.svg"
              onClick={() => submitNumberOfPlayers(2)}
            />
            <PlayerNumberButton
              src="icons/3-players.svg"
              onClick={() => submitNumberOfPlayers(3)}
            />
            <PlayerNumberButton
              src="icons/4-players.svg"
              onClick={() => submitNumberOfPlayers(4)}
            />
          </PlayerNumberWrapper>
        </PlayerSelectionWrapper>
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
