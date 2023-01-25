import React, {useState} from 'react';
import './App.css';
import PlayerCreation from './components/PlayerCreation';
import Game from './containers/Game';
import styled from 'styled-components';


function App() {

  const MainAppWrapper = styled.div`
      position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(icons/background_tile.png);
  ` 
  const [isGameStarted, setIsGameStarted] = useState(false)

  return (
    <MainAppWrapper className="App">
      {!isGameStarted && <PlayerCreation setIsGameStarted={setIsGameStarted}/>}
      {isGameStarted && <Game/>}
    </MainAppWrapper>
  );
}

export default App;
