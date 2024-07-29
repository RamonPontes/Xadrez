import clear from "@/scripts/clear";

export default function King(i, j, board){
    let NewPosition = board.map(row => row.slice())

    NewPosition = clear(NewPosition)

    for (let k = -1; k < 2; k++){
        for (let l = -1; l < 2; l++) {
            const x = i + l
            const y = j + k
            if ((x !== i || y !== j) && x >= 0 && x < 8 && y >= 0 && y < 8) {
                if (NewPosition[x][y][0] === '') {
                    NewPosition[x][y][0] = 'red'
                }else {
                    NewPosition[x][y][4] = 'purple'
                }
                NewPosition[x][y][3] = [i, j]
            }
        }
    }
}