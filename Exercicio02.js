const leia = require('readline-sync')

// declarando variaveis
let nota1 , nota2 , nota3 , nota4 , mediafinal

// entrada de dados

console.log("Insira a nota 1: ")
nota1 = leia.questionFloat()

console.log("Insira a nota 2: ")
nota2 = leia.questionFloat()

console.log("Insira a nota 3: ")
nota3 = leia.questionFloat()

console.log("Insira a nota 4: ")
nota4 = leia.questionFloat()

// processamento

mediafinal = (nota1 + nota2 + nota3 + nota4) / 4

// saida de dados

console.log("Sua média final é: " + mediafinal)
