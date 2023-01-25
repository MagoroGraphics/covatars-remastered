import { Player } from "../types/PlayerType"
import React, {useState} from "react"

interface PlayerInputProps {
    playerNum: number
    // setPlayers: React.SetStateAction<[]>
}

const PlayerInput = (props:PlayerInputProps) => {
    const [playerName, setPlayerName] = useState("")
const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: string = e.target.value;
    setPlayerName(target)
}

const handleSubmit = () => {
    
}

return (
    <form>
        <label>Player {props.playerNum+1}</label>
        <input onChange={handleOnChange}>
        </input>
        <button type="submit">Create</button>
    </form>
)
}

export default PlayerInput