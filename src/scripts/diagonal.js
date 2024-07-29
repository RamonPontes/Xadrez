export default function DrawDiagonal(matriz, i, j) {
    let complet = [false, false, false, false]

    for (let k = 0; k <= 7; k++){
        if (i + k <= 7 && j + k <= 7 && matriz[i + k][j + k][0] === '' && !complet[0]) {
            matriz[i + k][j + k][0] = 'red'
            matriz[i + k][j + k][3] = [i, j]
        }else if(k !== 0 && i + k <= 7 && j + k <= 7 && matriz[i + k][j + k][0] !== '' && !complet[0]){
            matriz[i + k][j + k][4] = 'purple'
            matriz[i + k][j + k][3] = [i, j]
            complet[0] = true
        }
        if (i + k <= 7 && j - k >= 0 && matriz[i + k][j - k][0] === '' && !complet[1]) {
            matriz[i + k][j - k][0] = 'red'
            matriz[i + k][j - k][3] = [i, j]
        }else if(k !== 0 && i + k <= 7 && j - k >= 0 && matriz[i + k][j - k][0] !== '' && !complet[1]){
            matriz[i + k][j - k][4] = 'purple'
            matriz[i + k][j - k][3] = [i, j]
            complet[1] = true
        }
        if (i - k >= 0 && j - k >= 0 && matriz[i - k][j - k][0] === '' && !complet[2]){
            matriz[i - k][j - k][0] = 'red'
            matriz[i - k][j - k][3] = [i, j]
        }else if(k !== 0 && i - k >= 0 && j - k >= 0 && matriz[i - k][j - k][0] !== '' && !complet[2]){
            matriz[i - k][j - k][4] = 'purple'
            matriz[i - k][j - k][3] = [i, j]
            complet[2] = true
        }
        if (i - k >= 0 && j + k <= 7 && matriz[i - k][j + k][0] === '' && !complet[3]){
            matriz[i - k][j + k][0] = 'red'
            matriz[i - k][j + k][3] = [i, j]
        }else if(k !== 0 && i - k >= 0 && j + k <= 7 && matriz[i - k][j + k][0] !== '' && !complet[3]){
            matriz[i - k][j + k][4] = 'purple'
            matriz[i - k][j + k][3] = [i, j]
            complet[3] = true
        }
    }
    return matriz
}