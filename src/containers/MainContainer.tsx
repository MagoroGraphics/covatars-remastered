import React, { useState } from "react";
import Modal from "../components/Modal";
import PlayerCreation from "../components/PlayerCreation";
import Game from "./Game";
import Instructions from "../components/Instructions";
import styled from "styled-components";
import Scoreboard from "../components/Scoreboard";

//#region Styles
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
  margin: 24px 0px;
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

//#endregion

const MainContainer = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

  const toggleModal = (modal: string | null) => {
    modal ? setIsModalOpen(modal) : setIsModalOpen(null)

  };

  return (
    <>
      <Header>
        {!isGameStarted && (
          <>
            <ScoreboardButton onClick={() => toggleModal("scoreboard")}>Scoreboard</ScoreboardButton>
            <CovatarsLogo src="icons/covatars-logo.svg" />
          </>
        )}
        {isGameStarted && <ScoreboardButton onClick={() => setIsGameStarted(false)}>Back to homepage</ScoreboardButton>}
        <InstructionsButtonStyled onClick={() => toggleModal("instructions")}>
          <img src="icons/instructions_icon.svg" width="45px" />
          Instructions
        </InstructionsButtonStyled>
      </Header>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          {isModalOpen === "instructions" && <Instructions />}
          {isModalOpen === "scoreboard" && <Scoreboard/>}
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
