import assert from "assert";
import React, { SetStateAction, useState, useReducer } from "react";
import styled from "styled-components";
import { Card } from "../types/CardType";

//Create a state with a players object
//Change players state from array of strings to array of player objects using interface
//Post players to database

interface PlayerCreationProps {
  setIsGameStarted: React.Dispatch<SetStateAction<boolean>>;
}

//#region Styles
const MainWrapper = styled.div`
  width: 100%;
`;

const PlayerSelectionWrapper = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
  & h2 {
    font-size: 5vw;
  }
`;

const PlayerNumberButton = styled.img`
  margin: 20px 20px;
  cursor: pointer;
  min-width: 150px;
  background-color: #ffffff30;
  border-radius: 2vh;
  padding: 10px;
  &:hover {
    background-color: #ffffff77;
  }
  &:checked {
    background-color: #fff200f0;
  }
`;

const PlayerNumberWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  & input {
    display: none;
    &:checked + ${PlayerNumberButton} {
      background-color: #fff200d9;
    }
  }
`;

const StartButton = styled.button`
  color: purple;
  background-color: yellow;
  border-radius: 25rem;
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 3vh;
  font-family: "Lobster";
  margin: 12px 36px;
  padding: 10px 20px;
`;

const PlayerInput = styled.input`
  margin: 20px 10px;
  padding: 15px;
  border-radius: 2vh;
  color: #6e6e6e;
  font-weight: bold;
  font-size: 1rem;
`;

const NameInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
  color: #ffffff;
  margin: 0px;
`

//#endregion

const PlayerCreation = ({ setIsGameStarted }: PlayerCreationProps) => {
  const [step, setStep] = useState("PlayerNumberInput");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const initialState = {}
  const reducer = () => {

  }

  const addPlayerNames = () => {
    
  }

  const getAllCards = () => {
    fetch('/cards')
    .then(res => {
      return res
    })
    .then(data => console.log(data))
  }

  const [playerNames, dispatch] = useReducer<any>(reducer, initialState)

  const submitPlayerDetails = (): void => {
    console.log("Send to backend", players);
  };

  const renderPlayerInputs = (numOfPlayers: number) => {
    let playerInputs: React.ReactElement[] = [];
    for (let i = 1; i <= numOfPlayers; i++) {
      playerInputs.push(
        <PlayerInput defaultValue={`Player ${i} name`} key={i} onClick={(e) => (e.target as HTMLInputElement).select()} />
      );
    }
    return playerInputs;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumOfPlayers(parseInt(event.target.value));
    renderPlayerInputs(parseInt(event.target.value));
  };

  const handleStartGame = () => {
    // if(players.length < numOfPlayers) {
    //   setErrorMessage(true)
    //   return
    // };
    // setErrorMessage(false)
    // submitPlayerDetails();
    setIsGameStarted(true)
  };

  return (
    <MainWrapper>
      {step === "PlayerNumberInput" && (
        <PlayerSelectionWrapper>
          <h2>How many players?</h2>
          {errorMessage && <ErrorMessage>Write the names of the players</ErrorMessage>}
          <PlayerNumberWrapper onSubmit={submitPlayerDetails}>
            <label>
              <input
                type="radio"
                name="numOfPlayers"
                value={2}
                onChange={handleInputChange}
              />
              <PlayerNumberButton src="icons/2-players.svg" />
            </label>
            <label>
              <input
                type="radio"
                name="numOfPlayers"
                value={3}
                onChange={handleInputChange}
              />
              <PlayerNumberButton src="icons/3-players.svg" />
            </label>
            <label>
              <input
                type="radio"
                name="numOfPlayers"
                value={4}
                onChange={handleInputChange}
              />
              <PlayerNumberButton src="icons/4-players.svg" />
            </label>
          </PlayerNumberWrapper>
          <NameInputWrapper>
            {numOfPlayers > 0 ? renderPlayerInputs(numOfPlayers) : null}
          </NameInputWrapper>
          <StartButton onClick={handleStartGame}>Start</StartButton>
        </PlayerSelectionWrapper>
      )}
    </MainWrapper>
  );
};

export default PlayerCreation;
