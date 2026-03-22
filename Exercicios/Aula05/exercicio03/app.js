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

//Importação do modulo de funções de tratativa de erros e cálculos matemáticos 
const calcularTabuadaAutomatico = require('./modulo/calcular.js')

//Entrada de dados
dadosDeEntrada.question('Por gentileza, digite a tabuada inicial: ', function(tabuadaInicial){
    dadosDeEntrada.question('Por gentileza, digite a tabuada final: ', function(tabuadaFinal){
        dadosDeEntrada.question('Por gentileza, digite o número do contador inicial: ', function(contadorInicial){
            dadosDeEntrada.question('Por gentileza, digite o número do contador final: ', function(contadorFinal){
                //Guarda um valor booleano
                let resultado = calcularTabuadaAutomatico.tratativaDeErros(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)
                //Retorna um valor verdadeiro
                if(resultado){
                    //Recebe um array das tabuadas
                    resultado = calcularTabuadaAutomatico.calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)
                    if(resultado){
                        console.table(resultado)
                        dadosDeEntrada.close()
                    }else
                        dadosDeEntrada.close()
                        return false
                        
                }else{
                    dadosDeEntrada.close()
                    return false
                }
            })
        })
    })
})