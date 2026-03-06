console.log("Olá usuário :)")
const { sourceMapsEnabled } = require("process")
var readline = require("readline")

var dadosDeEntrada = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
})

//Solicitando os dados de entrada
dadosDeEntrada.question("Por gentileza, insira o seu nome: ", function(nomeDoUsuario){
    dadosDeEntrada.question("Por gentileza, insira o nome do produto: ", function(nomeDoProduto){
        dadosDeEntrada.question("Por gentileza, insira o valor da compra do produto: ", function(valorDoProduto){
            dadosDeEntrada.question("Por gentileza, insira a taxa de juros do produto: ", function(taxaDeJurosDoProduto){
                dadosDeEntrada.question("Por gentileza, insira o tempo de pagamento do produto: ", function(tempoDePagamentoDoProduto){
                    dadosDeEntrada.question("O tempo de pagamento do produto está em meses ou em ano? ", function(tipoDeTempo){
                        //Validação de entradas vazias
                        if(nomeDoUsuario == '' || nomeDoProduto == '' || valorDoProduto == '' || taxaDeJurosDoProduto == '' || tempoDePagamentoDoProduto == '' || tipoDeTempo == ''){
                            console.log("ERRO: Todos os espaços devem ser preenchidos!!!")
                        //Validação da ausência de números
                        }else if(isNaN(valorDoProduto) || isNaN(taxaDeJurosDoProduto) || isNaN(tempoDePagamentoDoProduto)){
                            console.log("ERRO: O valor do produto, taxa de juros e o tempo de pagamento devem ser preenchidos com números!!!")
                        //Validação de palavras incorretas
                        }else if(tipoDeTempo != 'ano' && tipoDeTempo != 'meses'){
                            console.log("ERRO: O tipo de tempo deve ser preenchido com a palavra ano ou meses")
                        }else{
                            //Conversão de porcentagem para decimal
                            let conversao = Number(taxaDeJurosDoProduto) / 100
                            let tempo = Number(tempoDePagamentoDoProduto)
                            //Conversão de tempo em anos para meses
                            if(tipoDeTempo == 'ano'){
                                tempo = tempo * 12
                            }
                            //Fórmula de cálculo de juros compostos
                            const valorFinalDoProduto = Number(valorDoProduto) * ((1 + conversao)** tempo)
                            //Fórmula para exibir a diferença de pagamento
                            let diferencaDePagamento = Number(valorFinalDoProduto) - Number (valorDoProduto)
                            console.log("******************* Calculator Company *******************\n")
                            console.log("Muito obrigado por realizar a sua compra conosco Sr(a) " + nomeDoUsuario + '.\n')
                            console.log("A compra do produto " + nomeDoProduto + " tem um valor de: " + valorDoProduto + '.\n')
                            console.log("A sua compra será parcelada em " +  tempo + " vezes e o Sr(a) pagará: " + valorFinalDoProduto.toFixed(2))
                            console.log("O acréscimo realizado ao valor de: " + valorDoProduto + ", será de " + diferencaDePagamento.toFixed(2) + '.\n')
                            console.log("Muito obrigado por escolher a Calculator Company.\n")
                            console.log("**************************************************************")
                           
                        }
                    })
                })
            })
        })
    })
})