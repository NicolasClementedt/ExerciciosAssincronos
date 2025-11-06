import { Stack } from "./Stack";
import * as readlinesync from 'readline-sync';

const pilha = new Stack<string>();


let continua: boolean = true
let opcoes: number = 0

while (continua){

    console.log("**************  Menu ***************")
    console.log("1- Adicionar Um Livro na Pilha")
    console.log("2 - Listar Todos os Livros")
    console.log("3 - Retirar Livro da Pilha")
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
            pilha.push(nome)
            console.log(`\nPilha:\n`)
            pilha.printStack()
            console.log(`\n${nome}\n`)
            console.log("Livro Adicionado!")
            break

        case 2:
            console.log("\n Lista de Livros na Fila: \n")
            pilha.printStack()
            break
        
        case 3:
            if (pilha.isEmpty()){
            console.log("\n A Pilha Está Vazia! \n")
            }else {
            pilha.pop()
            console.log("\nUm Livro foi Retirado da Pilha!\n")
            pilha.printStack()
            break
                 }
}
}