const leia = require('readline-sync')

//ler idade (int) de varias pessoas
//mostrar a quantidade total de pessoas com idade menor a 21
//mostrar a quantidade total de pessoas com idade maior a 50
//terminar a leitura de dados ao digitar uma idade negativa

//variaveis
let totalMenores21 = 0
let totalMaiores50 = 0
let idade = 0
let continua = true

//entrada de idades e processamento
while(continua){
idade = leia.questionInt("Digite uma idade: ")

//se a idade for negativa continua vira false
if(idade < 0){
     console.log()
     continua = false
}
else {


//avaliando se é menor de 21
if(idade < 21){
totalMenores21++
}


//avaliando se é maior de 50
else if (idade > 50){
totalMaiores50++
}
console.log(`Total de pessoas menores de 21 anos: ${totalMenores21}`)
console.log(`Total de pessoas maiores de 50 anos: ${totalMaiores50}`)

}
}


