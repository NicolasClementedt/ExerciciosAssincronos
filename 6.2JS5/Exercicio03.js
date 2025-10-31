const leia = require('readline-sync')

let nomeDoador , idade , jaFezDoacao

nomeDoador = leia.question("Digite seu nome: ")
idade = leia.questionInt("Digite sua idade: ")
jaFezDoacao = leia.question("Já fez outras doações? Responda com s ou n: ")

// processamento + saida de dados

if(idade < 18){
console.log(nomeDoador + " não está apto para doar sangue!")
}
else if(idade > 69){
console.log(nomeDoador + " não está adapto para doar sangue!")

}else if(idade >= 60 && idade <=69){

if(jaFezDoacao == 'n' ){
    console.log(nomeDoador + " não está apto para doar sangue! ")

}else{
    console.log(nomeDoador + " está adapto para doar sangue!")
}
}else{ 
    console.log(nomeDoador + " está adapto para doar sangue!")}
