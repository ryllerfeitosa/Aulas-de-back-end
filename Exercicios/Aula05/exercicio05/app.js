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
const separarNumnerosDoUsuario = require('./modulo/calcular.js')

//Entrada de dados
dadosDeEntrada.question('Por gentileza, digite o número inicial: ', function(numeroInicial){
    dadosDeEntrada.question('Por gentileza, digite o número final: ', function(numeroFinal){
        //Tratativa de erros do usuario
        let mensagem = separarNumnerosDoUsuario.tratativaDeErros(numeroInicial, numeroFinal)
        if(mensagem){
            //Função para separar números pares
            let numerosPares = separarNumnerosDoUsuario.separarNumerosPares(numeroInicial, numeroFinal)
            if(numerosPares){
                //Função para separar os números ímpares                
                let numeroImpares = separarNumnerosDoUsuario.separarNumerosImpares(numeroInicial,numeroFinal)
                if(numeroImpares){
                    //Função para exibir tantos os números pares quanto os ímpares
                    let mensagemFinal = separarNumnerosDoUsuario.exibirMensagem(numerosPares,numeroImpares)
                    if(mensagemFinal){
                        //Exibir todos os números pares e ímpares
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
        }else{
            dadosDeEntrada.close()
            return false
        }

    })
})