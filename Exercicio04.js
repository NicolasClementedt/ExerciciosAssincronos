const leia = require('readline-sync')

//variaveis

let n1 , n2 , n3 , n4 , dif

//entrada de dados

console.log("Insira o número 1: ")
n1 = leia.questionFloat()

console.log("Insira o número 2: ")
n2 = leia.questionFloat()

console.log("Insira o número 3: ")
n3 = leia.questionFloat()

console.log("Insira o número 4: ")
n4 = leia.questionFloat()

// processamento

dif = (n1 * n2) - (n3 * n4)

//saída de dados

console.log("Se pegarmos o produto do número 1 e 2, com o produto dos números 3 e 4, a diferença é: " + dif)
