/********************************************************************************************
 * Objetivo: Arquivo responsável pela tratativa de erros e funções para cálculos
 * Data: 15.03.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

//tratativa de erros
const tratativaDeErros = function (tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    if (tabuadaInicial == '' || tabuadaFinal == '' || contadorInicial == '' || contadorFinal == '') {
        console.log("ERRO: Todos os dados devem ser preenchidos!!!")
        return false
    }
    else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal)) {
        console.log("ERRO: Os dados devem ser preenchidos somente com numeros!!!")
        return false
    } else if (contadorInicial < 2 || contadorInicial > 100 || contadorFinal < 2 || contadorFinal > 100) {
        console.log("ERRO: Os valores do contador inicial e contador final devem ser maiores ou iguais a 2 e menores ou iguais a 100!!!")
        return false
    } else if (tabuadaInicial < 1 || tabuadaInicial > 50) {
        console.log("ERRO: A tabuada só pode ser calculada a partir de 1 e até 50 (50 tabuadas)!!!")
        return false
    } else
        return true

}



//calcular tabuada
const calcularTabuada = function (tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    //Variavel para guardar as tabuadas
    let tabuadas = []
    //Variável para guardar a informação do contador inicial
    let multiplicador = Number(contadorInicial)
    if (tabuadaInicial && tabuadaFinal && contadorInicial && contadorFinal) {
        //Laço de repetição para incrementar a tabuada
        while (Number(tabuadaInicial) <= Number(tabuadaFinal)) {
            //Exibir a mensagem de qual tabuada devera mostrar
            tabuadas.push("------Tabuada do " + tabuadaInicial + "------")
            //Laço de repetição para incrementar os cálculos
            while (Number(multiplicador) <= Number(contadorFinal)) {
                //Fórmula da tabuada
                let resultado = Number(tabuadaInicial) * Number(multiplicador)
                tabuadas.push(Number(tabuadaInicial) + ' X ' + Number(multiplicador) + ' = ' + Number(resultado))
                multiplicador++
            }
            //Reset do multiplicador
            multiplicador = contadorInicial
            tabuadaInicial++
        }
        return tabuadas
    }else
        return false
}

module.exports = {
    tratativaDeErros,
    calcularTabuada
}