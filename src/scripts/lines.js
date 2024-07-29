export default function DrawLinhas(matriz, i, j) {
    let complet = [false, false, false, false]

    for (let k = 0; k <= 7; k++) {
        if (matriz[k][j][0] === '' && k > i && !complet[0]) {
            matriz[k][j][0] = 'red'
            matriz[k][j][3] = [i, j]
        }else if(matriz[k][j][0] !== '' && k > i && !complet[0]){
            matriz[k][j][4] = 'purple'
            matriz[k][j][3] = [i, j]
            complet[0] = true
        }

        if (7 - k < i && matriz[7 - k][j][0] === '' && !complet[1]){
            matriz[7 - k][j][0] = 'red'
            matriz[7 - k][j][3] = [i, j]
        }else if(7 - k < i && matriz[7 - k][j][0] !== '' && !complet[1]){
            matriz[7 - k][j][4] = 'purple'
            matriz[7 - k][j][3] = [i, j]
            complet[1] = true
        }

        if (matriz[i][k][0] === '' && k > j && !complet[2]) {
            matriz[i][k][0] = 'red'
            matriz[i][k][3] = [i, j]
        }else if(matriz[i][k][0] !== '' && k > j && !complet[2]){
            matriz[i][k][4] = 'purple'
            matriz[i][k][3] = [i, j]
            complet[2] = true
        }
        if (7 - k < j && matriz[i][7 - k][0] === '' && !complet[3]){
            matriz[i][7 - k][0] = 'red'
            matriz[i][7 - k][3] = [i, j]
        }else if(7 - k < j && matriz[i][7 - k][0] !== '' && !complet[3]){
            matriz[i][7 - k][4] = 'purple'
            matriz[i][7 - k][3] = [i, j]
            complet[3] = true
        }
    }
    return matriz
}