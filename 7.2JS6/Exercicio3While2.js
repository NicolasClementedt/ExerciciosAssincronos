const leia = require("readline-sync");

//variavei
let idade
let identidadeGenero
let pessoaDesen
let continua = true
let totalBackend = 0
let totalMulherCistransFrontend = 0
let homensCisTransMobile40mais = 0
let naoBinarioFullStack30menos = 0
let totalPessoasPesquisa = 0
let somaIdade = 0


while(continua){

//coletando a idade
idade = leia.questionInt("Digite a sua idade: ")


// menu de cadastro
identidadeGenero = leia.questionInt("Indique um código para informar identidade de gênero:")


switch (identidadeGenero){

    case 1: identidadeGenero = "Mulher Cis" ; break
    case 2: identidadeGenero = "Homem Cis" ; break
    case 3: identidadeGenero = "Não Binário" ; break
    case 4: identidadeGenero = "Mulher Trans" ; break
    case 5: identidadeGenero = "Homem Trans" ; break
    case 6: identidadeGenero = "Outros" ; break
}

pessoaDesen = leia.questionInt("Digite um código para informar sua área de desenvolvimento: ")

switch (pessoaDesen){

    case 1: pessoaDesen = "Backend" ; break
    case 2: pessoaDesen = "Frontend" ; break
    case 3: pessoaDesen = "Mobile" ; break
    case 4: pessoaDesen = "FullStack" ; break
}

// contador global sem condicoes, completou o cadastro ele sobe
totalPessoasPesquisa++
somaIdade = somaIdade + idade

//contador de pessoas backend
if(pessoaDesen == 1){totalBackend++}
 
//contador de mulher cis ou trans fronted
if((identidadeGenero == 1 || identidadeGenero == 4) && pessoaDesen == 2) { totalMulherCistransFrontend++ }

//contador de homens cis ou trans mobile maiores de 40 anos
if ((identidadeGenero == 2 || identidadeGenero == 5) && pessoaDesen == 3 && idade > 40){ homensCisTransMobile40mais++ }

//contador não binario full stack menos 30
if (identidadeGenero == 3 && pessoaDesen == 4 && idade < 30) { naoBinarioFullStack30menos++ }

//loop para novos cadastros
console.log("\n++++++++++++++++MENU++++++++++++++++++");
continua = leia.keyInYNStrict("\nDeseja adicionar outro colaborador? Y para sim e N para não. ");
console.log("++++++++++++++++++++++++++++++++++");

}

console.log( "Total de pessoas desenvolvedoras Backend: " + totalBackend )
console.log( "Total de Mulheres Cis e Trans desenvolvedoras Frontend: " + totalMulherCistransFrontend )
console.log( "Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: " + homensCisTransMobile40mais )
console.log( "Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: " + naoBinarioFullStack30menos )
console.log( "O número total de pessoas que responderam à pesquisa: " + totalPessoasPesquisa )


let mediaIdade
mediaIdade = somaIdade / totalPessoasPesquisa

console.log( "A média de idade das pessoas que responderam à pesquisa: " + mediaIdade )


    

