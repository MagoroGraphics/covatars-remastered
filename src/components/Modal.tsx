import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const ModalOverlay = styled.div`
  background-color: 0 0 0 0.75;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 0;
`;

const ModalBox = styled.div`
  background-color: #fcfc97;
  z-index: 1000;
  width:50%;
  height:50%;
  position:relative;
  color:black;
  border-radius: 25px;
  padding:50px;
  overflow: scroll;
`;

const Modal = ({ isOpen, onClose, children }:ModalProps) => {
  return (
    <>
      <ModalOverlay />
      <ModalBox>{children}</ModalBox>
    </>
  );
};
export default Modal;
