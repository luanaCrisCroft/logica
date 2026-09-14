const input = require("readline-sync")
var nota1 = input.questionFloat("Qual sua primeira nota? ")
var nota2 = input.questionFloat("Qual a sua segunda nota? ")
var nota3 = input.questionFloat("Qual é a sua terceira nota? ")
var frequencia = input.questionFloat("Qual foi a sua frequencia? ")
var pi = input.questionFloat("Qual a nota do seu projeto? ")
var media = (nota1+nota2+nota3)/3
if(media >= 7 && frequencia >=75 && pi >=7){
    console.log("Foi aprovado")
}else if(media >=7 && frequencia <75 && pi<7){
    console.log("Recuperação e sua média foi " + media )
}else if(media <7 && frequencia <75 && pi<7){
    console.log("VAi para o conselho de classe e depois recuperação")
}else{
    console.log("Fale com a professora")
}