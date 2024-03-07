import { Card } from "./CardType"

export interface Player {
    id: number | undefined
    playerNum: number
    name: string
    score: number
    isTurn: boolean
    hand: Card[]
    board: Card[]
}