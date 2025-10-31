const leia = require('readline-sync')

// variaveis 

let codigoItem , quantidade

let nomeProduto
let precoUnitario
let valorTotal



// entrada de dados

codigoItem = leia.questionInt("Escolha um item de 1 a 6: ")

quantidade = leia.questionInt("Digite quantas unidades deseja: ")

// processamento switch case

switch(codigoItem){
    case 1:
        nomeProduto = "Cachorro Quente"
        precoUnitario = 10.00
        break

    case 2:
        nomeProduto = "X-Salada"
        precoUnitario = 15.00
        break
    
    case 3:
        nomeProduto = "X-Bacon"
        precoUnitario = 18.00
        break

    case 4:
        nomeProduto = "Bauru"
        precoUnitario = 12.00
        break
    
    case 5:
        nomeProduto = "Refrigerante"
        precoUnitario = 8.00
        break

    case 6:
        nomeProduto = "Suco de Laranja"
        precoUnitario = 13.00

        default:
            console.log("Erro: SOMENTE ITEM DE 1 A 6!! ")
}

valorTotal = quantidade * precoUnitario

// saida de dados

console.log("Você pediu " + quantidade + " " + nomeProduto)
console.log("Valor total ficou em: R$ " + valorTotal)

