/********************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no banco de dados MySQL na tabela
 * Filme
 * Data: 15.04.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/
/*
    A partir de agora, todas as funções serão criadas com a palavra async, 
    não utilizamos anteriormente pois só trabalhamos com dados estáticos.
    Utilizaremos o modelo CRUD, sendo:
    C -> create -> insert
    R -> Read   -> select
    U -> update -> update
    D -> delete -> delete
*/

//Import da biblioteca para gerenciar o banco de dados Mysql no node.js
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD Mysql
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de filme
const insertFilme = async function(filme){
    let sql = `insert into tbl_filme(
                                nome, 
                                data_lancamento, 
                                duracao, 
                                sinopse, 
                                avaliacao, 
                                valor, 
                                capa
                                )
                values ('${filme.nome}', 
		                '${filme.data_lancamento}', 
                        '${filme.duracao}', 
                        '${filme.sinopse}',
                        '${filme.avaliacao}',
                        '${filme.valor}',
                        '${filme.capa}'
                );`

    //Executar o scriptSQL no banco de dados
    let result = await knexConex.raw(sql)
    /*
        O await é importante pois a API manda uma solicitação para o banco de dados,
        porém o BD leva um tempo para processar e enviar uma resposta, logo, é importante
        adicionar para aguardar uma resposta do banco de acordo com a solicitação que foi feita  
    */
    if(result)
        return true
    else
        return false
}

//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme){

}

//Função para retornar todos os dados da tabela de filme 
const selectAllFilme = async function(){

}

//Função para retornar os dados do filme filtrando pelo id
const selectByIdFilme = async function(id){

}

//Função para excluir um filme pelo id
const deletefilme = async function(id){

}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deletefilme
}