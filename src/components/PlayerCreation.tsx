import React , {useState} from "react";
import { Player } from "../types/PlayerType";

const PlayerCreation = () => {

const [step, setStep] = useState("PlayerNumberInput")
const [players, setPlayers] = useState({})

    //Create an option to introduce number of players
    //Create a state to know which step the app is in
    //Based on number of players, display input for player names
    //Create a state with a players object
    //Post players to database

    return(
        <div>
            <h1>Player Creation</h1>
            {step === "PlayerNumberInput" && <form><h2>How many players?</h2><input value=""></input></form>}
            {step === "PlayerCreation" && <h3>Create Players</h3>}
        </div>
    )
}

export default PlayerCreation