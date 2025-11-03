const leia = require('readline-sync')

//variaveis para definir intervalo

let numero1 , numero2

// entrada de dados
numero1 = leia.questionInt("Digite o primeiro número do intervalo: ")
numero2 = leia.questionInt("Digite o último número do intervalo: ")

// condicional para invalidez ou legenda do que vai ser mostrado
if( numero2<numero1 ){
    console.log("Intervalo Inválido")
    return
}else {
    console.log(`Números múltiplos de 3 e 5 no interval entre ${numero1} e ${numero2}`)
}

// processando os numeros dentro do intervalo
for (let nNoIntervalo = numero1 ; nNoIntervalo <= numero2; nNoIntervalo++ ){

// processando quais são múltiplos por 3 e 5
if(nNoIntervalo % 3 == 0 && nNoIntervalo % 5 == 0){

// saída de quais números atendem as condições
    console.log(`${nNoIntervalo} é múltiplo de 3 e 5`)
}
}