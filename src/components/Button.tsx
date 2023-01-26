import React from "react";
import styled from "styled-components";

interface PropTypes {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

const ButtonStyled = styled.button`
  background-color: yellow;
  color: purple;
  font-weight: bold;
  border-radius: 2vh;
  padding:1vh;
`;

const Button = ({ onClick, text }: PropTypes) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
    </>
  );
};

export default Button;
