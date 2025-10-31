const leia = require('readline-sync')

//declarando variaveis

let salariobruto , adicionalnoturno , horasextras ,
 descontos , salarioliquido

//entrada de dados

console.log("Insira o valor do salário bruto: ")
salariobruto = leia.questionFloat()

console.log("Insira o valor do adicional noturno: ")
adicionalnoturno = leia.questionFloat()

console.log("Insira o valor das horas extras: ")
horasextras = leia.questionFloat()

console.log("Insira o valor dos descontos: ")
descontos = leia.questionFloat()

//processamento

salarioliquido = salariobruto + adicionalnoturno 
+ (horasextras * 5) - descontos

//saida de dados

console.log("O valor do salário líquido é: " + salarioliquido)
