import { Queue } from "./Queue";
import * as readlinesync from 'readline-sync';

const fila = new Queue <string>();



let continua: boolean = true
let opcoes: number = 0

while (continua){

    console.log("**************  Menu ***************")
    console.log("1- Adicionar Cliente na Fila")
    console.log("2 - Listar Todos os Clientes")
    console.log("3 - Retirar Cliente da Fila")
    console.log("0 - Sair")
    console.log("************************************")
    
    opcoes = readlinesync.questionInt("Entre com a opção desejada: ")
    


    switch(opcoes){

        case 0:
            continua = false
            console.log("Programa Finalizado!")
            break

        case 1:
            const nome = readlinesync.question("Digite o nome: ")
            fila.enqueue(nome)
            console.log(`\nFila:\n`)
            console.log(nome)
            console.log("Cliente Adicionado!")
            break

        case 2:
            console.log("\n Lista de Clientes na Fila: \n")
            fila.printQueue()
            break
        
        case 3:
            if (fila.isEmpty()){
            console.log("\n A Fila Está Vazia! \n")
            }else {
            fila.dequeue()
            console.log("\nFila:\n")
            fila.printQueue()
            break
                 }
}

}
