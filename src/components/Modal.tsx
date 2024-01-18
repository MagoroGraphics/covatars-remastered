import React from "react";
import styled from "styled-components";

interface ModalProps {
  toggleInstructionsModal: () => void;
  children: React.ReactNode;
}

const CloseButton = styled.div`
  border-radius: 1cqb;
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: purple;
  width:fit-content;
  height:auto;
  padding: 5px 10px;
  color: yellow;
  margin: 24px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  background-color: 0 0 0 0.75;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
`;

const ModalBox = styled.div`
  background-color: #fcfc97;
  z-index: 1000;
  width: 50%;
  height: 50%;
  position: relative;
  color: black;
  border-radius: 25px;
  padding: 50px;
  overflow-y: scroll;
`;

const Modal = ({ toggleInstructionsModal, children }: ModalProps) => {
  return (
    <>
      <ModalOverlay />
      <ModalBox>
        <CloseButton onClick={toggleInstructionsModal}>Close</CloseButton>
        {children}
      </ModalBox>
    </>
  );
};
export default Modal;
