import React, {useState} from 'react';
import './App.css';
import PlayerCreation from './components/PlayerCreation';
import Game from './containers/Game';


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  return (
    <div className="App">
      {!isGameStarted && <PlayerCreation setIsGameStarted={setIsGameStarted}/>}
      {isGameStarted && <Game/>}
    </div>
  );
}

export default App;
