console.log("Olá usuário :)")

const { sourceMapEnabled } = require("process")
var readline = require("readline")

var dadosDeEntrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados
dadosDeEntrada.question("Por gentileza, digite o primeiro número da operação: ", function (primeiroNumero) {
    dadosDeEntrada.question("Por gentileza, digite o segundo número da operação: ", function (segundoNumero) {
        dadosDeEntrada.question("Por gentileza, digite a operação matemática que você deseja realizar (somar, subtrair, multiplicar ou dividir): ", function (operacaoMatematica) {
            //Import da biblioteca que realiza a tratativa de erros e as demais funções
            let calculos = require('./modulo/calculos.js')
            let resultado = calculos.tratarErroDeDoisSeparadoresDecimais(primeiroNumero, segundoNumero)
            if (resultado) { //Caso retorne uma valor booleano verdadeiro
                //Alterando o recebimento de dados da variável resultado
                resultado = calculos.tratativaDeErros(primeiroNumero, segundoNumero, operacaoMatematica)
                if (resultado) {
                    //Alterando o recebimento de dados da variável resultado
                    resultado = calculos.calcularOperacaoMatematica(primeiroNumero, segundoNumero, operacaoMatematica)
                    if (resultado) {
                        //Alterando o recebimento de dados da variável resultado
                        console.log("O resultado é: " + resultado.toFixed(2))
                        dadosDeEntrada.close()
                    } else {
                        dadosDeEntrada.close()
                        return false
                    }
                } else {
                    dadosDeEntrada.close()
                    return false
                }
            } else {
                dadosDeEntrada.close()
            }
        })
    })
})