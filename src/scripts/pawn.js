import clear from "@/scripts/clear"

export default function Pawn(i, j, board){
    let NewPosition = board.map(row => row.slice())

    NewPosition = clear(NewPosition)

    if (NewPosition[i][j][1] === "B") {
        if (NewPosition[i][j][2] === 0) {
            if (i + 2 >= 0 && NewPosition[i + 2][j][0] === '' && NewPosition[i + 1][j][0] === '') {
                NewPosition[i + 2][j][0] = 'red'
                NewPosition[i + 2][j][3] = [i, j]
            }
            if (i + 1 >= 0 && NewPosition[i + 1][j][0] === '') {
                NewPosition[i + 1][j][0] = 'red'
                NewPosition[i + 1][j][3] = [i, j]
            }
        } else {
            if (i + 1 <= 7 && NewPosition[i + 1][j][0] === '') {
                NewPosition[i + 1][j][0] = 'red'
                NewPosition[i + 1][j][3] = [i, j]
            }
        }
        if (i + 1 <= 7 && j - 1 >= 0 && NewPosition[i + 1][j - 1][0] !== '') {
            NewPosition[i + 1][j - 1][4] = 'purple'
            NewPosition[i + 1][j - 1][3] = [i, j]
        }
        if (i + 1 <= 7 && j + 1 <= 7 && NewPosition[i + 1][j + 1][0] !== '') {
            NewPosition[i + 1][j + 1][4] = 'purple'
            NewPosition[i + 1][j + 1][3] = [i, j]
        }
    } else {
        if (NewPosition[i][j][2] === 0) {
            if (i - 2 >= 0 && NewPosition[i - 2][j][0] === '' && NewPosition[i - 1][j][0] === '') {
                NewPosition[i - 2][j][0] = 'red'
                NewPosition[i - 2][j][3] = [i, j]
            }
            if (i - 1 >= 0 && NewPosition[i - 1][j][0] === '') {
                NewPosition[i - 1][j][0] = 'red'
                NewPosition[i - 1][j][3] = [i, j]
            }
        } else {
            if (i - 1 >= 0 && NewPosition[i - 1][j][0] === '') {
                NewPosition[i - 1][j][0] = 'red'
                NewPosition[i - 1][j][3] = [i, j]
            }
        }
        if (i - 1 >= 0 && j - 1 >= 0 && NewPosition[i - 1][j - 1][0] !== '') {
            NewPosition[i - 1][j - 1][4] = 'purple'
            NewPosition[i - 1][j - 1][3] = [i, j]
        }
        if (i - 1 >= 0 && j + 1 <= 7 && NewPosition[i - 1][j + 1][0] !== '') {
            NewPosition[i - 1][j + 1][4] = 'purple'
            NewPosition[i - 1][j + 1][3] = [i, j]
        }
    }
}