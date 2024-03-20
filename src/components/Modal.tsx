import React from "react";
import styled from "styled-components";

interface IModalProps {
  toggleModal: (modal: string | null) => void;
  children: React.ReactNode;
}
//#region styles
const CloseButton = styled.div`
  border-radius: 1cqb;
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: purple;
  width: fit-content;
  height: auto;
  padding: 5px 10px;
  color: yellow;
  margin: 24px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  background-color: black;
  opacity: 75%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const ModalBox = styled.div`
  background-color: #fcfc97;
  z-index: 1000;
  left:25%;
  width: 50%;
  height: 50%;
  position: absolute;
  color: black;
  border-radius: 25px;
  padding: 50px;
  overflow-y: scroll;
  scrollbar-width: none;
`;
//#endregion

const Modal = ({ toggleModal, children }: IModalProps) => {
  return (
    <>
      <ModalOverlay />
      <ModalBox>
        <CloseButton onClick={() => toggleModal(null)}>Close</CloseButton>
        {children}
      </ModalBox>
    </>
  );
};
export default Modal;
