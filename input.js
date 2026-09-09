const escrever = require("readline-sync")
let nome = escrever.question("Qual seu nome?")
var comidaPreferida = escrever.question("Qual sua comida preferida?")
var idade =  parseInt(escrever.question("Qual é a sua idade?"))
console.log(idade)
if(idade >=25){
    console.log("Pode entrar na festa, ebaaaaaaa")
}else{
    console.log("Volta pra casa, sorry")
}

if(idade >=25 && comidaPreferida == "Pizza"){
    console.log("Pode entrar")
}else if(idade >=25 && comidaPreferida =="Lasanha"){
    console.log("converse com a dona da festa")
}else{
    console.log("volte amanhã porque hoje é pizzaaaaaa")
}