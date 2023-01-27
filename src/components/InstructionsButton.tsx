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



const InstructionsButton = () => {
  return (
    <InstructionsButtonStyled>
      <img src="icons/instructions_icon.svg" />
      Instructions
    </InstructionsButtonStyled>
  );
};

export default InstructionsButton;
