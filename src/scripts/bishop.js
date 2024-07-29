import clear from "@/scripts/clear";
import DrawDiagonal from "@/scripts/diagonal";

export default function Bishop(i, j, board){
    let NewPosition = board.map(row => row.slice())

    NewPosition = clear(NewPosition)
    DrawDiagonal(NewPosition, i, j)
}