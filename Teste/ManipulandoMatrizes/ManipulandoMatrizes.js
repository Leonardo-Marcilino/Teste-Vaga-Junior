function processMatrix(list) {
    const numRow = list.length

    const sumRows = [];

    //Soma Linhas
    for(let i = 0; i < list.length; i++){
        rows = 0;
        for (let j = 0; j < list[i].length; j++) {
            rows += list[i][j];  
        }
        sumRows.push(rows);
    }
    const sumColumns = []

    // Soma Colunas
    for(let i = 0; i < list.length; i++){
        columns = 0;
        for (let j = 0; j < list[i].length; j++) {
            columns += list[j][i]; 
        }
        sumColumns.push(columns);
    }
    
    // Valor das diagonais
    diagonalPrincipal = 0
    diagonalSegundaria = 0

    for(let i = 0; i < list.length; i++){
        for(let j = 0; j < list[i].length; j++){
            if (i == j){
                diagonalPrincipal =  diagonalPrincipal + list[i][j];
            }
            if (i + j == numRow - 1){
                diagonalSegundaria = diagonalSegundaria + list[i][j];
            }
        }
    }

    return {
    sumRows,
    sumColumns,
    diagonalPrincipal,
    diagonalSegundaria
    };
}

//Leitura da matriz
const numRows = parseInt(prompt('Quantas linhas ? '));
const numCols = parseInt(prompt('Quantas colunas ? '));

const list = [];

for(let i = 0; i < numRows; i++){
    list[i] = [];
    for (let j = 0; j < numCols; j++) {
        list[i][j] = parseInt(prompt('Insira um número'));
    }
}
//Apresentação
for(let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++) {
        console.log(`[ ${list[i][j]} ]`);
    }
    console.log('\n');
}

console.log(processMatrix(list))