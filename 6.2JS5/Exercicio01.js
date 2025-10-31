const leia = require('readline-sync')


// variaveis

let a , b , c , soma

// entrada de dados

a = leia.questionInt("Digite o número A: ")
b = leia.questionInt("Digite o número B: ")
c = leia.questionInt("Digite o número C: ")

soma = a + b

// processamento if else + saida de dados

if(soma > c ){
    console.log("A soma de A + B é maior que C")
}else if (soma < c ){
    console.log("A soma de A + B é menor que C")
}else if(soma == c){
    console.log("A soma de A + B é igual a C")
}


