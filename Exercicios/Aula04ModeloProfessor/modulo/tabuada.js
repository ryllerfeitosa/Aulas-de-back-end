/******************************************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número
 * Data: 25.02.26
 * Autor: Riller
 * Versão: 1.0
 *****************************************************************/

const calculosMatematicos = require('./calcular.js')

//Função anônima para imprimir a tabuada usando o while
const gerarTabuada = function(tabuada){
    let tab  = Number(tabuada)
    let cont = 0
    //Função para gerar a tabuada de 0 até 10
    while(cont <= 10){
        let resultado = calculosMatematicos.multiplicar(tab, cont)
        /*console.log(tab + 'X' + cont + '=' + resultado)*/
        //Outra forma de exibir
        console.log(`${tab} X ${cont} = ${resultado}`)
        //cont = cont + 1
        //cont += 1
        cont++
    }
}

//Função anônima para imprimir a tabuada usando o for
const gerarTabuadaFor = function(tabuada){
    let tab  = Number(tabuada)
    //Função para gerar a tabuada de 0 até 10
    for(let cont = 0; cont <= 10; cont++){
        //Chama a função multiplicar para realizar a operação
        let resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} X ${cont} = ${resultado}`)
    }
}

gerarTabuadaFor(2)