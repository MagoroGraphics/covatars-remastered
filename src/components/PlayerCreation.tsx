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
  & h2 {
    font-size:5vw;
  }
`;

const PlayerNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlayerNumberButton = styled.img`
  margin: 20px 20px;
  cursor: pointer;
  min-width: 150px;
  background-color: #ffffff30;
  border-radius: 2vh;
  padding: 10px;
  &:hover{
    background-color: #ffffff77;
  }
  &:selection{
    background-color: #fffcc87e;
  }
`;

const StartButton = styled.button`
  color: purple;
  background-color: yellow;
  border-radius: 25rem;
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 2vh;
  font-family: "Lobster";
  margin: 12px 36px;
  padding: 10px 20px;
`;

const PlayerCreation = ({ setIsGameStarted }: PlayerCreationProps) => {
  const [step, setStep] = useState("PlayerNumberInput");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);

  const submitNumberOfPlayers = (number: number): void => {
    setNumOfPlayers(number)
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

  const handleStartGame = () => {
    setIsGameStarted(true)
  }

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
          <StartButton onClick={handleStartGame}>Start</StartButton>
        </PlayerSelectionWrapper>
      )}
    </MainWrapper>
  );
};

export default PlayerCreation;
