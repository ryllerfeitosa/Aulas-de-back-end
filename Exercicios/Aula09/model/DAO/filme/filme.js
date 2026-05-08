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
    try {
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
                            if('${filme.avaliacao}' = '', null, '${filme.avaliacao}'),
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
            return result[0].insertId
        else
            return false
        } catch (error) {
            //Para conseguirmos visualizar os erros
            //console.log(error)
            return false
        }
}


//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme){
    try {
        //Script para atualizar os dados do BD
        let sql = ` update tbl_filme set
                        nome                = '${filme.nome}',
                        data_lancamento     = '${filme.data_lancamento}',
                        duracao             = '${filme.duracao}',
                        sinopse             = '${filme.sinopse}',
                        avaliacao           = if('${filme.avaliacao}' = '', null, '${filme.avaliacao}'),
                        valor               = '${filme.valor}',
                        capa                = '${filme.capa}'
                    where id                = ${filme.id};`
        //Executa o script no BD
        let result = await knexConex.raw(sql)
        if(result)
            return true
        else
            return false        
    } catch (error) {
        return false
    }
}

//Função para retornar todos os dados da tabela de filme 
const selectAllFilme = async function(){
    try {
        //Comando do BD para selecionar os filmes pertencentes a tbl_filme, o desc é um forma de deixar a visualização em forma decrescente 
        let sql = `select * from tbl_filme order by id desc`

        //Aguardando a resposta do BD
        let result = await knexConex.raw(sql)
        //Verificando se o knex retornou um array
        if(Array.isArray(result)){
            //Retornar somente os objetos criados através dos atributos referentes a entidade tbl_filme
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

//Função para retornar os dados do filme filtrando pelo id
const selectByIdFilme = async function(id){
    try {
        //Comando de banco para buscar o id (int) tendo como parâmetro o id solicitado na função
        let sql     = `select * from tbl_filme where id=${id}`
        let result  = await knexConex.raw(sql)
        if(Array.isArray(result)){
            return result[0]
        }else
            return false
    } catch (error) {
        return false
    }
}

//Função para excluir um filme pelo id
const deletefilme = async function(id){
    try {
        let sql     = `delete from tbl_filme where id = ${id};`
        let result  = await knexConex.raw(sql)
        if(result){
            return true
        }else
            return false
    } catch (error) {
        return false
    }
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deletefilme
}