console.log("Olá usuário :)")
const { sourceMapsEnabled } = require("process")
var readline = require("readline")

var dadosDeEntrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados
dadosDeEntrada.question("Digite o nome do cliente: ", function (nome) {
    dadosDeEntrada.question("Digite o nome do produto: ", function (produto) {
        dadosDeEntrada.question("digite o valor da compra: ", function (capitalProduto) {
            dadosDeEntrada.question("Digite a taxa de juros a ser aplicada na compra: ", function (taxaJuros) {
                dadosDeEntrada.question("Digite o tempo para o pagamento do produto: ", function (tempo) {
                    //Import da biblioteca que realiza cálculos financeiros
                    let calculos = require('./modulo/calculos.js')
                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaJuros, tempo)

                    if (montante) { //Montante está retornando uma variável booleana quando não consegue calcular
                        console.log("O montante final é: " + montante.toFixed(2))
                        dadosDeEntrada.close()
                    } else {
                        dadosDeEntrada.close()
                    }
                })
            })
        })
    })
})