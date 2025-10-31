const leia = require('readline-sync')

// variaveis 

let numero1 , numero2 , operacao , sinalAritmetico , resultado

// entrada de dados

numero1 = leia.questionFloat("Insira o número 1: ")
numero2 = leia.questionFloat("Insira o número 2: ")
operacao = leia.questionInt("Escolha a operação com um número de 1 a 4: ")


// processamento

switch(operacao){
    case 1:
        resultado = (numero1 + numero2)
        sinalAritmetico = "+"
        break

    case 2:
        resultado = (numero1 - numero2)
        sinalAritmetico = "-"
        break

    case 3:
        resultado = (numero1 * numero2)
        sinalAritmetico = "*"
        break

    case 4:
        resultado = (numero1 / numero2)
        sinalAritmetico = "/"
        break

    default:
        console.log("Operação Inválida!!")
        
        return

}

console.log(numero1 + " " + sinalAritmetico + " " + numero2 + " " + "=" + " " + resultado)
