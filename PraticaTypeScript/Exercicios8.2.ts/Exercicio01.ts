import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>()


for (let limiteCores = 0; limiteCores < 5; limiteCores++){

let coresDigitadas = readlinesync.question(`\nDigite a ${limiteCores + 1}˚ cor: `)

cores.push(coresDigitadas);
}

console.log("\nListar todas as cores: \n")

for (const cor of cores){
    console.log(cor)
}

console.log("\nOrdenar as cores: \n")
cores.sort()

for (const cor of cores){
    console.log(cor)
}
