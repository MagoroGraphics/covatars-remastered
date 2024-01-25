import React from "react";
import styled from "styled-components";

const PlayerHand = styled.div`
  height:20%;
  width: 90%;
  background-color: gray;
  border-radius: 1vh;
  border: solid;
  margin-left: auto;
  margin-right: auto;
`

const Game = () => {
  return (
    <>
      <PlayerHand/>
    </>
  );
};

export default Game