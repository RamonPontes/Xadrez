export default function clear(matriz) {
    for (let x = 0; x < 8; x++){
        for (let y = 0; y < 8; y++){
            if (matriz[x][y][4] === 'purple'){
                matriz[x][y][4] = ''
            }
            if (matriz[x][y][0] === 'red'){
                matriz[x][y][0] = ''
            }
            matriz[x][y][3] = [-1, -1]
        }
    }
    return matriz
}
