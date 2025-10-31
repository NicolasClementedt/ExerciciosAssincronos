const leia = require('readline-sync')

// variaveis

let cargo , reajuste, nomeColaborador , salario, novoSalario

//entrada

nomeColaborador = leia.question("Digite o nome do colaborador: ")
salario = leia.questionInt("Digite o salário atual do colaborador: ")
cargo = leia.questionInt("Digite um número de 1 a 6 correspondete ao cargo do colaborador: ")

// processamento com switch case

switch(cargo){
   case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break

        case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break

        case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break

        case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break

        case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break

        case 1:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break     
}

novoSalario = (salario * reajuste) + salario

// saída de dados

console.log(nomeColaborador + " " + "com o cargo: " + " " + "seu novo salário é: " + novoSalario)

