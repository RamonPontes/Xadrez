"use client"

import styles from "../../styles/page.module.css"
import clear from "@/scripts/clear"
import Pawn from "@/scripts/pawn"
import Queen from "@/scripts/queen"
import Rook from "@/scripts/rook"
import Bishop from "@/scripts/bishop"
import King from "@/scripts/king"

import {useState} from "react"
import Knight from "@/scripts/knight";

export default function Home() {
    const [Positions, SetPositions] = useState([
        [['♜', 'B', 0, [-1, -1], ''], ['♞', 'B', 0, [-1, -1], ''], ['♝', 'B', 0, [-1, -1], ''], ['♛', 'B', 0, [-1, -1], ''], ['♚', 'B', 0, [-1, -1], ''], ['♝', 'B', 0, [-1, -1], ''], ['♞', 'B', 0, [-1, -1], ''], ['♜', 'B', 0, [-1, -1], '']],
        [['♟', 'B', 0, [-1, -1], ''], ['♟', 'B', 0, [-1, -1], ''], ['♟', 'B', 0, [-1, -1], ''], ['♟', 'B', 0, [-1, -1], ''], ['♟', 'B', 0, [-1, -1], ''], ['♟', 'B', 0, [-1, -1], ''], ['♟', 'B', 0, [-1, -1], ''], ['♟', 'B', 0, [-1, -1], '']],
        [['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], '']],
        [['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], '']],
        [['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], '']],
        [['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], ''], ['', '', 0, [-1, -1], '']],
        [['♙', 'W', 0, [-1, -1], ''], ['♙', 'W', 0, [-1, -1], ''], ['♙', 'W', 0, [-1, -1], ''], ['♙', 'W', 0, [-1, -1], ''], ['♙', 'W', 0, [-1, -1], ''], ['♙', 'W', 0, [-1, -1], ''], ['♙', 'W', 0, [-1, -1], ''], ['♙', 'W', 0, [-1, -1], '']],
        [['♖', 'W', 0, [-1, -1], ''], ['♘', 'W', 0, [-1, -1], ''], ['♗', 'W', 0, [-1, -1], ''], ['♕', 'W', 0, [-1, -1], ''], ['♔', 'W', 0, [-1, -1], ''], ['♗', 'W', 0, [-1, -1], ''], ['♘', 'W', 0, [-1, -1], ''], ['♖', 'W', 0, [-1, -1], '']]
    ])

    const board = []

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.push(<div
                    className={`${styles.square} ${(i + j) % 2 === 0 ? styles.black : styles.white}`}
                    onClick={() => {
                        let NewPosition = Positions.map(row => row.slice())

                        if (NewPosition[i][j][3] !== [-1, -1] && NewPosition[i][j][4] === 'purple' || NewPosition[i][j][0] === 'red'){
                            const peca = NewPosition[ NewPosition[i][j][3][0] ][ NewPosition[i][j][3][1] ]
                            NewPosition[ NewPosition[i][j][3][0] ][ NewPosition[i][j][3][1] ] = ['', '', 0, [-1, -1], '']

                            NewPosition[i][j] = peca

                            NewPosition[i][j][2]++
                            NewPosition = clear(NewPosition)

                        }else if (NewPosition[i][j][0] === "♙" || NewPosition[i][j][0] === "♟") {
                            Pawn(i, j, Positions)
                        }else if (NewPosition[i][j][0] === '♕' || NewPosition[i][j][0] === '♛') {
                            Queen(i, j, Positions)
                        }else if(NewPosition[i][j][0] === '♗' || NewPosition[i][j][0] === '♝'){
                            Bishop(i, j, Positions)
                        }else if(NewPosition[i][j][0] === '♖' || NewPosition[i][j][0] === '♜') {
                            Rook(i, j, Positions)
                        }else if(NewPosition[i][j][0] === '♔' || NewPosition[i][j][0] === '♚') {
                            King(i, j, Positions)
                        }else if(NewPosition[i][j][0] === '♘' || NewPosition[i][j][0] === '♞') {
                            Knight(i, j, Positions)
                        }
                        SetPositions(NewPosition)
                    }}>
                    <h1
                        className={`${Positions[i][j][4] === 'purple' ? styles.SquarePurple : Positions[i][j][0] === 'red' ? styles.SquareRed : null}`}>
                        {Positions[i][j][0] !== 'red' ? Positions[i][j][0] : null}
                    </h1>
                </div>
            )
        }
    }

    return (
        <>
            <div className={styles.board}>
                {board}
            </div>
        </>
    )
}
