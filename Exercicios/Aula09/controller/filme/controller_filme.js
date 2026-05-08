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
const filmeDAO = require('../../model/DAO/filme/filme.js')

//Função para inserir um novo filme
const inserirNovoFilme = async function (filme, contentType) {
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let validar = await validarDados(filme, contentType)
        //Se a função retornar um Json de erro, iremos devolver ao app o erro
        if (validar) {
            return validar //400
        } else {
            let result = await filmeDAO.insertFilme(filme)
            if (result) { //201
                message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                message.DEFAULT_MESSAGE.response = filme
            } else {      //500
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
        return message.DEFAULT_MESSAGE
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para atualizar um filme
const atualizarFilme = async function (filme, id, contentType) {
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        //Validação do contentType para receber apenas JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){
            //Validação para o ID incorreto
            let resultBuscarID = await buscarFilme(id)
            /*  Se a função buscar encontrar o filme o atributo do JSON será verdadeiro
                Isso significa que o filme existe na base, caso não retorne true, então
                o retorno da função poderá ser um 400 ou 404 ou até mesmo um 500
            */
            if(resultBuscarID.status){
                let validar = await validarDados(filme, contentType)
                //Validação de campos obrigatórios para a atualização (Body)
                if(!validar){
                    //Adicionando o atributo ID do filme no JSON para ser enviado ao DAO
                    filme.id = id
                    //Chama a função do DAO para atualizar o filme (dados e o ID)
                    let result = await filmeDAO.updateFilme(filme)
                    if(result){
                        message.DEFAULT_MESSAGE.status      = message.SUCESS_UPDATE_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCESS_UPDATE_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCESS_UPDATE_ITEM.message
                        message.DEFAULT_MESSAGE.response    = filme
                        return message.DEFAULT_MESSAGE //200(atualizado)
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL //500
                    }
                }else
                    return validar //400
            }else{
                return resultBuscarID //404
            }
        }else
            return message.ERROR_CONTENT_TYPE //415(ContentType)
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500(controller)
    }
}

//Função para retornar todos os filmes
const listarFilme = async function () {
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        //Chama a função do DAO para retornar a lista de todos os filmes
        let result = await filmeDAO.selectAllFilme()
        //Validação para verificar se o DAO conseguiu processar os dados
        if(result){
            //Validação para verificar se existe conteúdo no array
            if(result.length > 0){
                message.DEFAULT_MESSAGE.status          = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code     = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count  = result.length
                message.DEFAULT_MESSAGE.response.filme  = result
                return message.DEFAULT_MESSAGE
            }else
                return message.ERROR_NOT_FOUND //404 (Dados não encontrado)
        }else
            return message.ERROR_INTERNAL_SERVER_MODEL //500 (model) Erro no BD
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller) Erro no backEnd
    }
}

//Função para buscar um filme pelo ID
const buscarFilme = async function (id) {
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        //Validação para garantir que o id seja válido
        if(id == '' || id == null || id == undefined || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST       //400
        }else{
            let result = await filmeDAO.selectByIdFilme(id)
            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status          = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code     = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme  = result
                    return message.DEFAULT_MESSAGE
                }else{
                    return message.ERROR_NOT_FOUND //404 (Não encontrado)
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (banco de dados)
            }
        }
    } catch (error) {
        return message.DEFAULT_MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER  //500 (controller)
    }
}

//Função para excluir um filme
const excluirFilme = async function (id) {
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let resultBuscarId = await buscarFilme(id)
        if(resultBuscarId.status){
            let result = await filmeDAO.deletefilme(id)
            if(result){
                message.DEFAULT_MESSAGE.status      = message.SUCESS_DELETE_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_DELETE_ITEM.status_code
                message.DEFAULT_MESSAGE.message     = message.SUCESS_DELETE_ITEM.message

                return message.DEFAULT_MESSAGE
            }else
                return message.ERROR_INTERNAL_SERVER_MODEL //500         
        }else{
            return resultBuscarId //404 (não encontrado) 400 (erro de requisição) 500 (banco de dados) 500 (controller)
        }
    } catch (error) {
        return message.DEFAULT_MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para validar todos os dados de filme (obrigatórios, quantidade de caracteres, etc)
const validarDados = async function (filme, contentType) {
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    //Validação de dados para os atributos do filme (status 400)
    //Validação para p tipo de dados da requisição (somente JSON)
    if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
        if (filme.nome == '' || filme.nome == null || filme.nome == undefined || filme.nome.length > 80) {
            //Criando um atributo no clone  da padronização de mensagens
            message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        } else if (filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10) {
            message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        } else if (filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5) {
            message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        } else if (filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined) {
            message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        } else if (isNaN(filme.avaliacao) || filme.avaliacao.length > 3) {
            message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
                                                                                                                //Transforma o valor em um array, sendo o índice 0 a parte inteira e o índice 1 a parte decimal
        } else if (filme.valor == '' || filme.valor == null || filme.valor == undefined || isNaN(filme.valor) || filme.valor.split('.')[0].length > 3) {
            message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        } else if (filme.capa.length > 255) {
            message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        } else
            return false

    } else
        return message.ERROR_CONTENT_TYPE
}

module.exports = {
    inserirNovoFilme,
    listarFilme,
    buscarFilme,
    atualizarFilme,
    excluirFilme
}