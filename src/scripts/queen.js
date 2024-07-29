import clear from "@/scripts/clear";
import DrawLinhas from "@/scripts/lines";
import DrawDiagonal from "@/scripts/diagonal";

export default function Queen(i, j, board){
    let NewPosition = board.map(row => row.slice())

    NewPosition = clear(NewPosition)
    NewPosition = DrawLinhas(NewPosition, i, j)
    DrawDiagonal(NewPosition, i, j)
}