import React,{ useState } from "react";
import styled from "styled-components";
import { Player } from "../types/PlayerType";

const PlayerHand = styled.div`
  height:20%;
  width: 90%;
  background-color: gray;
  border-radius: 1vh;
  border: solid;
  margin-left: auto;
  margin-right: auto;
`

interface GameProps{
  players: Player[]
}

const Game = ({players} : GameProps) => {

  const [hand, setHand] = useState({})

  const handleClick = async () => {
    const response = await fetch('/draw-cards')
    const cards = await response.json()
  }
  
  return (
    <>
      <PlayerHand/>
      <button onClick={() =>handleClick()}>Get Cards</button>
    </>
  );
};

export default Game