import React, { useState } from "react";
import Modal from "../components/Modal";
import PlayerCreation from "../components/PlayerCreation";
import Game from "./Game";
import Instructions from "../components/Instructions";
import styled from "styled-components";

const InstructionsButtonStyled = styled.button`
  color: yellow;
  height: auto;
  width: auto;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: bold;
  font-size: 2vh;
  font-family: "Lobster";
  margin: 12px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ScoreboardButton = styled.button`
  color: yellow;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: bold;
  font-size: 2vh;
  font-family: "Lobster";
`;

const CovatarsLogo = styled.img`
  max-width: 50vw;
`;

const MainContainer = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleInstructionsModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header>
        <ScoreboardButton>Scoreboard</ScoreboardButton>
        <CovatarsLogo src="icons/covatars-logo.svg"/>
        <InstructionsButtonStyled onClick={toggleInstructionsModal}>
          <img src="icons/instructions_icon.svg" width="45px" />
          Instructions
        </InstructionsButtonStyled>
      </Header>
      {isModalOpen && (
        <Modal toggleInstructionsModal={toggleInstructionsModal}>
          <Instructions />
        </Modal>
      )}
      {!isGameStarted ? (
        <PlayerCreation setIsGameStarted={setIsGameStarted} />
      ) : (
        <Game />
      )}
    </>
  );
};

export default MainContainer;
