import styled from "styled-components";

const InstructionsButtonStyled = styled.button`
    color: yellow;
    height: 10vh;
    width: auto;
    cursor:pointer;
  `;

const InstructionsButton = () => {
    return <InstructionsButtonStyled><img src="icons/instructions_icon.svg"/>Instructions</InstructionsButtonStyled>
}

export default InstructionsButton