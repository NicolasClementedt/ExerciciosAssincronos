
const leia = require('readline-sync')

//ler 10 numeros
// processar quais são pares
// processar quais são impares
//mostrar na tela duas informacoes:
// 1 - quantos são pares
// 2 - quantos são impares

let numeroInserido
let totalImpares = 0
let totalPares = 0

// for para entrar 10 numeros
for(contador = 0; contador < 10; contador++){
    numeroInserido = leia.questionInt(`Digite o ${contador + 1}˚ número: `)

if(numeroInserido % 2 == 0){
   totalPares++

}else{
totalImpares++;
}

}

console.log(`Total de números pares: ${totalPares}`)
console.log(`Total de números ímpares: ${totalImpares}`)