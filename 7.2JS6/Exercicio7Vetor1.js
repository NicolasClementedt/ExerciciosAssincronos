// vetor com 10 numeros aleatorios fora de ordem e não repetidos
// construir algoritmo para pesquisar dados dos indices do vetor
// usuario digita um número e o programa exibe na tela em qual indice esta este numero
// se o numero nao seja encontrado mostrar na tela a mensagem: "Não foi encontrado!""
// exemplo 2 5 1 3 4 9 7 8 10 6
// o numero 7 está localizado na posição: 6

const leia = require('readline-sync')

let aleatorios = [2 , 5 , 1 , 3 , 4 , 9 , 7 , 8 , 10 , 6] //vetor de 10 posições (0 a 9)

// entrada do número que será pesquisado
let numPesquisar = leia.questionInt("Digite o número que você deseja encontrar: ")

// para garantir que o vetor inteiro será pesquisado começamos do -1
let posicaoDoNum = -1

//repetição for para percorrer o vetor inteiro
for(let indice = 0; indice < aleatorios.length ; indice++){

    // condicional if para ver se o número pesquisado é igual ao número dentro do índice
    if (aleatorios[indice] == numPesquisar){
        posicaoDoNum = indice
        break
    }

}

if (posicaoDoNum != -1){
    console.log(`O número ${numPesquisar} foi encontrado na posição: ${posicaoDoNum}`)
} else {
    console.log("Não foi encontrado! ")
}










