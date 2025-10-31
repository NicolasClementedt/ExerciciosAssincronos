const leia = require('readline-sync')

let moleDuro , categoria , dieta

//entrada de dados

moleDuro = leia.question("O animal é invertebrado ou vertebrado? ")
categoria = leia.question("O animal é de qual categoria? " )
dieta = leia.question("O animal têm qual dieta? " )

// processamento + saída de dados

if(moleDuro == "vertebrado" && categoria == "ave" && dieta == "carnívoro"){
console.log("Aguia")    
}
else if(moleDuro == "vertebrado" && categoria == "ave" && dieta == "onívoro"){
console.log("Pomba ")
}
else if(moleDuro == "vertebrado" && categoria == "mamífero" && dieta  == "onívoro"){
console.log("Homem")
}
else if(moleDuro == "vertebrado" && categoria == "mamífero" && dieta  == "herbívoro"){
console.log("Vaca")
}
else if(moleDuro == "invertebrado" && categoria == "inseto" && dieta  == "hematófago"){
console.log("Pulga")
}
else if(moleDuro == "invertebrado" && categoria == "inseto" && dieta  == "herbívoro"){
console.log("Lagarta")
}
else if(moleDuro == "invertebrado" && categoria == "anelídeo" && dieta  == "hematófago"){
console.log("Sanguessuga")
}
else if(moleDuro == "invertebrado" && categoria == "inseto" && dieta  == "onívoro"){
console.log("Minhoca")
}

