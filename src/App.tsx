import "./App.css";
import styled from "styled-components";
import MainContainer from "./containers/MainContainer";
import React from "react";


function App() {
  const MainAppWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(icons/background_tile.png);
    color: yellow;
  `;

  

  return (
    <MainAppWrapper className="App">
      <MainContainer/>
    </MainAppWrapper>
  );
}

export default App;
