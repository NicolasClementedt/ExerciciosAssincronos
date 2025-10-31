const leia = require('readline-sync')

// variaveis

let n

// entrada de dados

n = leia.questionInt("Digite um número inteiro: ")

// processamento if else + saída

if(n % 2 == 0 && n > 0){
    console.log("O número " + n + " é par e positivo!")

}else if(n % 2 != 0 && n > 0){

    console.log("O número " + " é impar e positivo!")

}else if(n % 2 == 0 && n<0){

    console.log("O númmero " + " é par e negativo!")

}else if (n % 2 != 0 && n < 0){
    
    console.log("O número " + n + " é impar e negativo!")
}


