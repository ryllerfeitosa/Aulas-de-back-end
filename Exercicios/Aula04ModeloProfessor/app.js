/*********************************************************************************
 * Objetivo: Arquivo responsável pelas entradas e saídas de dados da aplicação
 * Data: 20.02.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************/
const calculosMatematicos = require('./modulo/calcular.js')

let resposta = calculosMatematicos.calcular(10, 60, 'somar')
console.log(resposta)