/********************************************************************************************
 * Objetivo: Arquivo responsável pelas funções que serão utilizadas na API
 * Data: 18.03.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

//Importação do módulo do arquivo estados_cidades.js
const dados = require('./estados_cidades.js')

//Função para exibir as siglas dos estados
const getListaDeEstados = function(){

    //Guardar as siglas dos estados em um array
    const siglasArray = []
    /*
    Caminho para acessar a abreviação, sendo: a variável dados guardarndo a requisição do arquivo estados_cidades,
    acessando a variável lista de estados, que da acesso ao JSON onde temos o atributo estados, o forEach percorre e trás
    todas as informações pertencentes ao objeto e guarda o seu valor na variável item, logo em seguida, acessamos o atributo
    sigla pertencente ao objeto de cada índice de estados
    */
    dados.listaDeEstados.estados.forEach(function (item){
        siglasArray.push(item.sigla)
    })
    //Json para ter os estados e a quantidade total
    const estadosJson = {
        'UF': siglasArray,
        'Quantidade': siglasArray.length
    }
    return estadosJson
}

//Função para a descrição do estado tendo como critério de filtro a sigla
const getDadosEstados = function(siglaDoEstado){
        let descricaoDoEstadoJson = false
        dados.listaDeEstados.estados.forEach(function(item){
            if(String(siglaDoEstado).toUpperCase() == String(item.sigla).toUpperCase()){
                descricaoDoEstadoJson = {
                    'UF': item.sigla,
                    'Descricao': item.nome,
                    'Capital': item.capital,
                    'Regiao': item.regiao
                }
            }
             
        })
        return descricaoDoEstadoJson
}

//Função para a descrição de uma capital do estado tendo como critério de filtro a sigla
const getCapitalEstados = function(siglaDoEstado){
    const dadosCapitalArray = []
    let descricaoDaCapitalJson = false
        dados.listaDeEstados.estados.forEach(function(item){
            dadosCapitalArray.push(item)
            if(String(siglaDoEstado).toUpperCase() == String(item.sigla).toUpperCase()){
                descricaoDaCapitalJson  = {
                    'UF': item.sigla, 'Descricao': item.nome, 'Capital': item.capital
                }
            }
        })
        return descricaoDaCapitalJson
}

//Função para filtrar os estados de acordo com a região
const getEstadosRegiao = function(regiao){
    let descricaoDaRegiaoJson = false
    let condicao = false
    dados.listaDeEstados.estados.forEach(function(item){
        if(String(regiao).toUpperCase() == String(item.regiao).toUpperCase()){
            if(!condicao){
                descricaoDaRegiaoJson = {
                    'Regiao': regiao.toUpperCase(),
                    'Estados': []
                }
                condicao = true
            }
            descricaoDaRegiaoJson.Estados.push({
                'UF': item.sigla,
                'Descricao': item.nome
            })
        }
    })
    return descricaoDaRegiaoJson    
}

//Função para verificar a capital do Brasil e as que foram capitais
const getCapitalPais = function(){
    const exibirDados = {
        'Capitais': []
    }
        dados.listaDeEstados.estados.forEach(function(item){
            if(item.capital_pais != undefined){
                exibirDados.Capitais.push({
                    'Capital_atual' : item.capital_pais.capital,
                    'Uf'            : item.sigla,
                    'Descricao'     : item.nome,
                    'Capital'       : item.capital,
                    'Regiao'        : item.regiao,
                    'Capital_pais_ano_inicio'   : item.capital_pais.ano_inicio,
                    'Capital_pais_ano_termino'  : item.capital_pais.ano_fim
                })
            }else
                return false
        })
        return exibirDados
}

//Função para exibir as cidades de um estado tendo como critério de filtro a sigla
const getCidades = function(siglaDoEstado){
    const listarCidades = []
    let cidadesDoEstado = false
    let condicao = false
    dados.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == String(siglaDoEstado).toUpperCase()){
            item.cidades.forEach(function(cidades){
            listarCidades.push(cidades.nome)
            })
            if(!condicao){
                cidadesDoEstado = {
                    'Uf'                : item.sigla,
                    'Descricao'         : item.nome,
                    'Quantidade_cidades': item.cidades.length,
                    'Cidades'           : listarCidades 
                }
                condicao = true                
            }
        }
    })
    return cidadesDoEstado
}

module.exports = {
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstados,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}