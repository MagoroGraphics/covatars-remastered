import { ICard } from "./CardType"

export interface IPlayer {
    id: number | undefined
    playerNum: number
    name: string
    score: number
    isTurn: boolean
    hand: ICard[]
    board: ICard[]
}