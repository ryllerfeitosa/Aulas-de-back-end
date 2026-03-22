/********************************************************************************************
 * Objetivo: Arquivo responsável pela tratativa de erros e funções para cálculos
 * Data: 15.03.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

//tratativa de erros
const tratativaDeErros = function (fatorial) {
    if (fatorial == '') {
        console.log("ERRO: Todos os dados devem ser preenchidos!!!")
        return false
    }
    else if (isNaN(fatorial)) {
        console.log("ERRO: Os dados devem ser preenchidos somente com números!!!")
        return false
    } else if (fatorial == 0) {
        console.log("ERRO: Não existe fatorial de 0!!!")
        return false
    } else if (fatorial == 1) {
        console.log("ERRO: Não é possível calcular o fatorial de 1, por gentileza, forneça um valor maior que 1!!!")
        return false
    } else
        return true

}

//Calcular o fatorial
const calcularFatorial = function(fatorial){
    let fatorialConvertido = Number(fatorial)
    //Variável para guardar o valor anterior do cálculo
    let resultado = fatorialConvertido
    if(fatorial){
        //Laço de repetição para a fórmula do fatorial
        for(let cont = fatorialConvertido - 1; cont >= 1; cont--){
            //Fórmula para calcular o fatorial
            resultado = resultado * cont
        }
        return Number(resultado)
    }else
        return false
}

//Exibir mensagem
const exibirMensagem = function(fatorial, resultado){
    let fatorialConvertido = Number(fatorial)
    let mensagemDoDecremento = []
    if(resultado){
        for(let cont = fatorialConvertido - 1; cont >= 1; cont--){
            //Mensagem do cálculo
            mensagemDoDecremento.push(" x " + cont)
        }
        //A função join tem como utilidade juntar as strings tendo como separador das mesmas o parâmetro fornecido na função
        let  mensagem = "O fatorial de " + fatorial + " é: " + fatorial + mensagemDoDecremento.join('') + " = " + resultado
        return mensagem
    }else
        return false
}

module.exports = {
    tratativaDeErros,
    calcularFatorial,
    exibirMensagem
}