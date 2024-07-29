import clear from "@/scripts/clear";

export default function Knight(i, j, board) {
    let NewPosition = board.map(row => row.slice())

    NewPosition = clear(NewPosition)

    for(let k = -2; k <= 2; k++){
        if(k === -2 || k === 2){
            if (i + k >= 0 && i + k <= 7 ) {
                if ( j + 1 <= 7) {
                    NewPosition[i + k][j + 1][0] === '' ? NewPosition[i + k][j + 1][0] = 'red' : NewPosition[i + k][j + 1][4] = 'purple'
                    NewPosition[i + k][j + 1][3] = [i, j]
                }
                if ( j - 1 >= 0) {
                    NewPosition[i + k][j - 1][0] === '' ? NewPosition[i + k][j - 1][0] = 'red' : NewPosition[i + k][j - 1][4] = 'purple'
                    NewPosition[i + k][j - 1][3] = [i, j]
                }
            }
            if (j + k >= 0 && j + k <= 7 ) {
                if ( i + 1 <= 7){
                    NewPosition[i + 1][j + k][0] === '' ? NewPosition[i + 1][j + k][0] = 'red' : NewPosition[i + 1][j + k][4] = 'purple'
                    NewPosition[i + 1][j + k][3] = [i, j]
                }
                if ( i - 1 >= 0) {
                    NewPosition[i - 1][j + k][0] === '' ? NewPosition[i - 1][j + k][0] = 'red' : NewPosition[i - 1][j + k][4] = 'purple'
                    NewPosition[i - 1][j + k][3] = [i, j]
                }
            }
        }
    }
}