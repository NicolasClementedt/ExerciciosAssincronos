const leia = require('readline-sync')

// declarando variaveis
let salario
let abono
let salarionovo

// entrada de dados
console.log("Digite seu salário: ")
salario = leia.questionFloat()

console.log("Digite seu abono: ")
abono = leia.questionFloat()

// processamento

salarionovo = salario + abono

// saida de dados

console.log("Seu novo super salário é: " + salarionovo)



