import React, { useState } from "react";
import Modal from "../components/Modal";
import PlayerCreation from "../components/PlayerCreation";
import Game from "./Game";
import Instructions from "../components/Instructions";
import styled from "styled-components";

const InstructionsButtonStyled = styled.button`
  color: yellow;
  height: 10vh;
  width: auto;
  cursor: pointer;
  background-color:rgba(0,0,0,0);
  border:none;
  font-weight: bold;
  font-size:2vh;
  font-family: 'Lobster';
`;

const MainContainer = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleInstructionsModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section>
        <InstructionsButtonStyled onClick={toggleInstructionsModal}>Instructions</InstructionsButtonStyled>
      </section>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleInstructionsModal}>
          <Instructions />
        </Modal>
      )}
      {/* {!isGameStarted && <PlayerCreation setIsGameStarted={setIsGameStarted} />}
      {isGameStarted && <Game />} */}
    </>
  );
};

export default MainContainer;
