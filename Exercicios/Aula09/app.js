/********************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de filmes
 * Data: 17.04.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

//Import das dependências para criar a API
const express        = require('express')
const cors           = require('cors')

//Import das controllers do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Import para trabalhar com body -> Comando para instalação: npm install body-parser --save
const bodyParser     = require('body-parser')
//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJson = bodyParser.json() 

//Criar um objeto para manipular o express
const app = express()

//Permissões a serem aplicadas no CORS da API
const corsOptions = {
    //Origem da requisição
    origin:         ['*'],
    //Tipo de método
    methods:        'GET, POST, PUT, DELETE, OPTIONS',
    //Permissões de cabeçalho
    allowedHeaders: ['Content-type', 'Autorization']
}

//Configura as permissões da API através do cors
app.use(cors(corsOptions))

//EndPoints

app.post('/v1/senai/locadora/filme', bodyParserJson, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisição)
    let dados = request.body
    let contentType = request.headers['content-type']
    let result = await controllerFilme.inserirNovoFilme(dados, contentType)
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme', async function(request, response){
    let result = await controllerFilme.listarFilme()
    response.status(result.status_code)
    response.json(result)
})

//Só é utilizado a busca via parâmetro quando o critério de filtro for o id, nas demais ocasiões é via query
app.get('/v1/senai/locadora/filme/:id', async function(request, response){
    let id = request.params.id
    let result = await controllerFilme.buscarFilme(id)
    response.status(result.status_code)
    response.json(result)
})

app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições...")
})