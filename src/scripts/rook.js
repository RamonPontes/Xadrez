import clear from "@/scripts/clear";
import DrawLinhas from "@/scripts/lines";

export default function Rook(i, j, board) {
    let NewPosition = board.map(row => row.slice())

    NewPosition = clear(NewPosition)
    DrawLinhas(NewPosition, i, j)
}