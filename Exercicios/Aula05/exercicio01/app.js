/*********************************************************************************
 * Objetivo: Arquivo responsável pelas entradas de informações
 * Data: 20.02.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************/

console.log("Olá usuário :)")
const { sourceMapsEnabled } = require("process")
var readline = require("readline")

var dadosDeEntrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importação do modulo de funções de tratativa de erros e cálculos matemáticos 
const calcularImc = require('./modulo/calcular.js')

//Solicitando os dados de entrada
dadosDeEntrada.question('Por gentileza, digite a sua massa corporal em quilogramas: ', function (massaCorporal) {
    dadosDeEntrada.question('Por gentileza, digite a sua altura em centímetros:', function (altura) {
        
        //Chamando a função de tratar erros
        let resposta = calcularImc.tratarErros(massaCorporal, altura)
        if (!resposta) {
            dadosDeEntrada.close()
            return false
        } else {
            //Chamando a função para calcular o IMC
            resposta = calcularImc.calculoDeImc(massaCorporal, altura)
            if (!resposta) {
                dadosDeEntrada.close()
                return false
            } else {
                //Chamando a função para classificar o IMC
                let classificacao = calcularImc.classificarImc(resposta)
                if (!classificacao) {
                    dadosDeEntrada.close()
                    return false

                } else
                    console.log('O seu IMC é: ' + resposta + '. Ou seja, ' + classificacao)
                    dadosDeEntrada.close()
            }

        }
    })
})