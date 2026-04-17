/*****************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e manipulação
   de dados para o CRUD de filmes
 * Data: 17.04.2026
 * Autor: Riller
 * Versão: 1.0
 ****************************************************************************/

/*
    Os nomes das funções na controller e na model são os mesmos para reduzir o fluxo de
    percurso do código, é um paradigma de programação com o objetivo de deixar mais
    organizado. EX: app chama uma função de validar dados, e o validar dados chama uma
    função de inserir dados, quando retornar um true, não sabemos se o true é de validar
    ou inserir, se ambas se chamam inserir, o fluxo será somente um.
*/
/*
    Quando se trata de variáveis, o endereço das variáveis são diferentes, ou seja, ficam
    armazenadas na memória em locais diferentes, quando se trata de objetos, ele permanece
    fixo em um local da memória, ou seja, é necessário fazer um clone do objeto.
    Comando:  let message = JSON.parse(JSON.stringify(config_message)) -> true
    OBS: Como o local do objeto é fixo, não é possível uma variável receber um objeto, pois
    altera o objeto original.
    Comando: let message = config_message -> false
*/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')
//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO       = require('../../model/DAO/filme/filme.js')

//Função para inserir um novo filme
const inserirNovoFilme = async function(filme){
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    //Validação de daods para os atributos do filme (status 400)
    if(filme.nome == '' || filme.nome == null || filme.nome == undefined || filme.nome.lenght > 80){
        //Criando um atributo no clone  da padronização de mensagens
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.lenght != 10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
    }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.lenght < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
    }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined || filme.sinopse){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
    }else if(isNaN(filme.avaliacao || filme.valor.lenght > 3)){
        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
    }else if(filme.valor == '' || filme.valor == null || filme.valor == undefined || isNaN(filme.valor) || filme.valor.lenght > 5){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
    }else if(filme.capa.lenght > 5){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
    }else{
        let result = await filmeDAO.insertFilme(filme)
        if(result){ //201
            message.DEFAULT_MESSAGE.status      = message.SUCCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message     = message.SUCCESS_CREATED_ITEM.message
        }else{      //400
            message.DEFAULT_MESSAGE.status      = message.ERROR_BAD_REQUEST.status
            message.DEFAULT_MESSAGE.status_code = message.ERROR_BAD_REQUEST.status_code
            message.DEFAULT_MESSAGE.message     = message.ERROR_BAD_REQUEST.message
            message.DEFAULT_MESSAGE.field       = message.ERROR_BAD_REQUEST.field
        }
            return message.DEFAULT_MESSAGE
    }
}

//Função para atualizar um filme
const atualizarFilme = async function(){

}

//Função para retornar todos os filmes
const listarFilme = async function (){
    
}

//Função para buscar um filme pelo ID
const buscarFilme = async function(){

}

//Função para excluir um filme
const excluirFilme = async function(){
    
}

module.exports = {
    inserirNovoFilme
}