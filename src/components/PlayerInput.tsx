interface PlayerInputProps {
    playerNum: number
}

const PlayerInput = (props:PlayerInputProps) => {
return (
    <form>
        <label>Player {props.playerNum}</label>
        <input>
        </input>
    </form>
)
}

export default PlayerInput