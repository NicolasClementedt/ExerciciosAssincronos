import readlinesync = require("readline-sync");

const setListaNumero: Set<number> = new Set<number>()

let numerosDigitados = 0

for(let limiteNumero = 0; limiteNumero < 10; limiteNumero++){
let numerosDigitados = readlinesync.questionInt(`Digite o ${limiteNumero + 1} número: `)

setListaNumero.add(numerosDigitados)

}

console.log("\nLista dados do Set: \n")

for(let numeros of setListaNumero){;
    console.log(numeros);
}

