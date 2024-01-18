import React, { useState } from "react";
import Modal from "../components/Modal";
import PlayerCreation from "../components/PlayerCreation";
import Game from "./Game";
import Instructions from "../components/Instructions";

const MainContainer = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <Instructions />
      </Modal>}
      {!isGameStarted && <PlayerCreation setIsGameStarted={setIsGameStarted} />}
      {isGameStarted && <Game />}
    </>
  );
};

export default MainContainer;
