const leia = require('readline-sync')

// variaveis

let saldo = 1000.00
let codigoOperacao
let valorSaque
let novoSaldo
let valorDeposito 


codigoOperacao = leia.questionInt("Digite um código de 1 a 4 para a operação desejada:" )
// processamento com switch case + if
switch(codigoOperacao){

    case 1:
        console.log( "Operação - Saldo" )
        console.log( "Saldo: R$ " + saldo)
        break

    case 2:
        console.log( "Operação - Saque" )
        valorSaque = leia.questionFloat("Digite o valor para sacar: ")
        
        if (valorSaque > saldo){
            console.log("Saldo Insuficiente :( ")
        }else{
            novoSaldo = saldo - valorSaque
            console.log("Novo Saldo: R$: " + novoSaldo )}
            break
    
    case 3:
        console.log("Operação - Depósito ")
        valorDeposito = leia.questionFloat("Digite o valor de depósito: ")
        novoSaldo = saldo + valorDeposito
        console.log("Novo Saldo: " + novoSaldo )
        break

        default:
            console.log( "Operação Inválida" )




}

