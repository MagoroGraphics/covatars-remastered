import React, { useState } from "react";
import { Player } from "../types/PlayerType";

const PlayerCreation = () => {
  const [step, setStep] = useState("PlayerNumberInput");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState({});

  const handleNumOfPlayersSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return numOfPlayers >= 2 && numOfPlayers <= 8 ? setStep("PlayerCreation") : null
  };

  const handleNumOfPlayersOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const target : number = +e.target.value
    setNumOfPlayers(target)
  }
  //Create an option to introduce number of players
  //Create a state to know which step the app is in
  //Based on number of players, display input for player names
  //Create a state with a players object
  //Post players to database

  return (
    <div>
      <h1>Player Creation</h1>
      {step === "PlayerNumberInput" && (
        <form onSubmit={handleNumOfPlayersSubmit}>
          <h2>How many players?</h2>
          <input name="numOfPlayers" type="numOfPlayers" onChange={handleNumOfPlayersOnChange} required></input>
          <input type="submit"></input>
        </form>
      )}
      {step === "PlayerCreation" && <h3>Create Players</h3>}
    </div>
  );
};

export default PlayerCreation;
