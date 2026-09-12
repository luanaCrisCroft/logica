const escrever = require("readline-sync")
console.log("=== Sistema de cálculo de frete ===")

const valorCompra = escrever.questionFloat("Digite o valor total da compra em R$: ")
const regiao = escrever.question("Digite a sigla da regiao (SE / SE / NE / N / CO): ").toUpperCase().trim()

if(valorCompra <= 0){
    console.log("\n[Erro] O valor da compra deve ser maior que R$ 0,00. ")
}else{
    console.log("\n--Resumo do Pedido --")

    if(regiao == "SE"){
        if (valorCompra >= 150) {
      console.log("Frete: GRÁTIS!")
    } else {
      console.log("Frete: R$ 15,00")
    }
    console.log("Prazo estimado: 2 dias úteis")

  } else if (regiao === "S") {
    if (valorCompra >= 200) {
      console.log("Frete: GRÁTIS!")
    } else {
      console.log("Frete: R$ 20,00")
    }
    console.log("Prazo estimado: 4 dias úteis")

  } else if (regiao === "NE") {
    if (valorCompra >= 250) {
      console.log("Frete: GRÁTIS!")
    } else {
      console.log("Frete: R$ 25,00")
    }
    console.log("Prazo estimado: 5 dias úteis")

  } else if (regiao === "N" || regiao === "CO") {
    if (valorCompra >= 300) {
      console.log("Frete: GRÁTIS!")
    } else {
      console.log("Frete: R$ 35,00")
    }
    console.log("Prazo estimado: 7 dias úteis")

  } else {
    console.log("[ERRO] Região não reconhecida. Por favor, tente novamente.")
  }
}