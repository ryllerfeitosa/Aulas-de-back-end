/*****************************************************************************************
 * Objetivo: Arquivo responsável pela configuração e padronização das mensagens da API
 * Data: 17.04.2026
 * Autor: Riller
 * Versão: 1.0
 ****************************************************************************************/

//Padronização de cabeçalho para retorno para API
const DEFAULT_MESSAGE = {
    api_description : "API para gerenciar controle de filtros",
    development     : "Riller da Costa Feitosa",
    Version         : "1.0.4.26",
    status          : Boolean,
    status_code     : Number,
    response        : {}
}

//Mensagem de erro da API
const ERROR_BAD_REQUEST                 = { status: false, 
                                            status_code: 400, 
                                            message: 'Os dados na requisição não estão corretos.'}
const ERROR_INTERNAL_SERVER_MODEL       = { status: false, 
                                            status_code: 400, 
                                            message: 'Não foi possível processar a requisição por conta de erro na API [ERRO NA MODELAGEM DE DADOS].'}
const ERROR_CONTENT_TYPE                = { status: false,
                                            status_code: 415,
                                            message: 'Não foi possível processar a requisição pois a API só aceita formato de dado Json.'}
const ERROR_INTERNAL_SERVER_CONTROLLER  = { status: false, 
                                            status_code: 400, 
                                            message: 'Não foi possível processar a requisição por conta de erro na API [ERRO NA CONTROLLER].'}
const ERROR_NOT_FOUND                   = { status: false, 
                                            status_code: 404, 
                                            message: 'Não foi encontrado nenhum dado para retorno.'}


//Mensagens de sucesso da API
const SUCCESS_CREATED_ITEM = {  status: true, 
                                status_code: 201, 
                                message: 'Registro inserido com sucesso!'}

const SUCCESS_RESPONSE     = {  status: true, 
                                status_code: 200}

const SUCESS_UPDATE_ITEM   = {  status: true,
                                status_code: 200,
                                message: 'Registro atualizado com sucesso'}
const SUCESS_DELETE_ITEM   = {  status: true,
                                status_code: 200,
                                message: 'Registro deletado com sucesso'}

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    SUCCESS_CREATED_ITEM,
    SUCCESS_RESPONSE,
    ERROR_NOT_FOUND,
    SUCESS_UPDATE_ITEM,
    SUCESS_DELETE_ITEM
}