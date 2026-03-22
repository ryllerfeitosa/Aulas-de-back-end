/********************************************************************************************
 * Objetivo: Arquivo responsável pela entrada de informações e administração do processamento
 * Data: 15.03.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

console.log("Olá usuário :)")

const { sourceMapEnabled } = require("process")
var readline = require("readline")

var dadosDeEntrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importação do modulo de funções de tratativa de erros e cálculo do fatorial
const calcularFatorialDoUsuario = require('./modulo/calcular.js')

//Entrada de dados
dadosDeEntrada.question('Por gentileza, digite o número que você deseja o fatorial: ', function(fatorial){
    let resultado = calcularFatorialDoUsuario.tratativaDeErros(fatorial)
    if(resultado){
        resultado = calcularFatorialDoUsuario.calcularFatorial(fatorial)
        if(resultado){
            let mensagemFinal = calcularFatorialDoUsuario.exibirMensagem(fatorial, resultado)
            if(mensagemFinal){
                console.log(mensagemFinal)
                dadosDeEntrada.close()
            }else{
                dadosDeEntrada.close()
                return false
            }
        }else{
            dadosDeEntrada.close()
            return false
        }
    }else{
        dadosDeEntrada.close()
        return false
    }
})