import assert from "assert";
import React, { SetStateAction, useState, useReducer } from "react";
import styled from "styled-components";
import { Card } from "../types/CardType";
import { Player } from "../types/PlayerType";

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
  const [players, setPlayers] = useState<Player[]>();
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const registerPlayers = (name : string, playerNum : number) => {
    const player : Player = {
      id: undefined,
      playerNum: playerNum,
      name: name,
      score: 0,
      isTurn: false,
      hand: []
    }
  }

  const reducer = (state, action) => {

  }

  const [state, dispatch] = useReducer(reducer, {players: []})

  const addPlayerNames = () => {
    
  }

  const getAllCards = () => {
    fetch('/cards')
    .then(res => {
      return res
    })
    .then(data => console.log(data))
  }

  const submitPlayerDetails = (): void => {
    console.log("Send to backend", players);
  };



  const renderPlayerInputs = (numOfPlayers: number) => {
    let playerInputs: React.ReactElement[] = [];
    for (let i = 1; i <= numOfPlayers; i++) {
      playerInputs.push(
        <PlayerInput defaultValue={`Player ${i} name`} key={i} required />
      );
    }
    return playerInputs
  };

  const setupEmptyPlayers = (numOfPlayers : number) => {
    let playerList : Player[] = []
    const playerSchema : Player = {
      id: undefined,
      playerNum: 0,
      name: "",
      score: 0,
      isTurn: false,
      hand: []
    }

    for(let i = 0; i < numOfPlayers; i++){
      playerSchema.playerNum = i
      playerList.push(playerSchema)
    }

    setPlayers(playerList)
  }

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numOfPlayers = parseInt(event.target.value)
    setNumOfPlayers(numOfPlayers);
    setupEmptyPlayers(numOfPlayers)
    renderPlayerInputs(numOfPlayers);
  };

  const handleStartGame = () => {
    console.log(players?.length, numOfPlayers)
    let playerNames : string[] = []
    players?.forEach((player) => {
      playerNames.push(player.name)
    })

    const nameNotEmpty = (currentValue : string) => currentValue !== ""
    const areAllNamesPresent = playerNames.every(nameNotEmpty)

    if(!areAllNamesPresent) {
      setErrorMessage(true)
      return
    };
    setErrorMessage(false)
    submitPlayerDetails();
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
                onChange={handleSelect}
              />
              <PlayerNumberButton src="icons/2-players.svg" />
            </label>
            <label>
              <input
                type="radio"
                name="numOfPlayers"
                value={3}
                onChange={handleSelect}
              />
              <PlayerNumberButton src="icons/3-players.svg" />
            </label>
            <label>
              <input
                type="radio"
                name="numOfPlayers"
                value={4}
                onChange={handleSelect}
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
