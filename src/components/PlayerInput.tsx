import { Player } from "../types/PlayerType"

interface PlayerInputProps {
    playerNum: number
    // setPlayers: React.SetStateAction<[]>
}

const PlayerInput = (props:PlayerInputProps) => {
    
const handleOnChange = () => {

}

return (
    <form>
        <label>Player {props.playerNum}</label>
        <input onChange={handleOnChange}>
        </input>
        <button type="submit">Create</button>
    </form>
)
}

export default PlayerInput