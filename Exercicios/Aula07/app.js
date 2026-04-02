/********************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
 * Data: 01.04.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

/*
    Para a produção da API utilizaremos para a comunicação entre o frontEnd e backEnd o protocolo http,
    porém será necessário utilizar uma biblioteca para o auxílio no uso do protocolo, a biblioteca que iremos
    utilizar é a 'express'. No protocolo HTTP temos algumas funções que são chamadas de "verbos", dependendo
    do que queremos fazer utilizamos um verbo em específico, dentre eles, temos:

    GET    -> Solicitar dados;
    POST   -> Solicitar a inserção de um novo item;
    PUT    -> Solicitar uma alteração;
    DELETE -> Solicitar um delete.

    O 'express' não é uma biblioteca que vem nativa no node JS, ou seja, será necesário instalar a parte,
    o node JS tem um repositório chamado 'NPM', cujo o qual temos a biblioteca 'express', para instalar a
    biblioteca, utilizaremos alguns comandos via terminal.

    Toda a comunicação com a API, será somente no arquivo app.js, ou seja, todos os comandos acimas estarão
    nesse arquivo, o mesmo solicitará dados diretamente das funções como era feito anteriormente via terminal.

    Comandos para instalação do EXPRESS - npm install express --save
    A instalação da biblioteca deve ocorrer na pasta raiz do app.js (Aula07), ao instalar, aparecerá alguns
    arquivos, recomenda-se não alterar os arquivos que foram baixados.

    ^ - Essa simbologia presente na versão package.json indica que essa versão está instalada, porém pode haver
    novas atualizações no projeto referente a versões superiores

    Instalação do CORS - npm install cors --save
    
    EXPRESS -> Dependência responsável pela utilização do protocolo HTTP para criar a API
    CORS    -> Dependência responsável pelas configurações a serem realizadas para a permissão da API
*/

//Import das dependências para criar a API
const express = require('express')
const cors    = require('cors')

/*Criando um objeto para manipular o express, o express é como se fosse a classe, 
e a variável const app é o objeto
*/
const app = express()

//Conjunto de permissões a sere aplicadas no CORS da API
const corsOptions = {
    /*
        o '*' deixa em aberto quem irá fazer a requisição na API, para deixa-lo restrito a uma máquina, 
        utilizaremos o IP de uma máquina ou de mais máquinas
        ex:  origin: ['192.168.0.1, 192.168.0.2']
    */
    origin:         ['*'],   //A origem da requisição
    methods:        'GET',  //Os métodos são verbos que serão liberados na API, separamos por vírgulas
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS 
}

//Configura as permissões da API através do Cors
app.use(cors(corsOptions))

//response -> Retornos da API (Enviar dados)
//request  -> São chegadas de dados na API (Receber dados)

const estadosCidades = require('./modulo/functions.js')

/*Criando EndPoints (pontos de parada) para a API
app.get('/v1/senai/cidades', function(request, response){
response.status(200)    
response.json({"Message": "Testando minha API de cidades"})
})*/
//Retorna dados de estados filtrando pelo UF
app.get('/v1/senai/dados/estados/:uf', function(request, response){
    /*
        Para receber dados diretamente do front, utilizamos no nome do Endpoint o ':', isso indica que será
        criado uma variável, o nome da variável é o que escrevemos logo após o ':'
        Não inverter o request e o response, pois é uma função de callBack
    */
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstados(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"Message": "O estado informado não foi encontrado"})
    }


})
//Retorna dados da capital do estado filtrando pelo UF
app.get('/v1/senai/capital/estados/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getCapitalEstados(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"Message": "O estado informado não foi encontrado"})
    }
})
//Retorna dados do estados que foram capitais do Brasil
app.get('/v1/senai/estados/capital/brasil', function(request, response){
    let capital = estadosCidades.getCapitalPais()
    if(capital){
        response.status(200)
        response.json(capital)
    }else{
        response.status(404)
    }
})
//Retorna dados do estado filtrando pela região
app.get('/v1/senai/estados/regiao/:regiao', function(request, response){
    let filtro = request.params.regiao
    let regiao = estadosCidades.getEstadosRegiao(filtro)
    if(regiao){
        response.status(200)
        response.json(regiao)
    }else{
        response.status(404)
        response.json({"Message": "Região não encontrada"})
    }
})
//Retorna dados das cidades filtrando pelo UF
app.get('/v1/senai/cidades/estados/:uf', function(request, response){
    let sigla = request.params.uf
    let cidades = estadosCidades.getCidades(sigla)

    if(!cidades){
        response.status(404)
        response.json({"Message": "Estado não encontrado"})
    }else{
        response.status(200)
        response.json(cidades)
    }
})
//Retorna a lista de estados
app.get('/v1/senai/estados', function(request, response){
    /*
        Sempre que o backEnd dar um response (enviar dados), sempre será enviado
        um Json e um status_code, o status_code sempre pode ser por exemplo o número 
        200, pois o 200 é um número que representa sucesso no envio de dados (resposta bem-sucedida)
        Demais valores: 
        Respostas Informativas (100 – 199)
        Respostas bem-sucedidas (200 – 299)
        Mensagens de redirecionamento (300 – 399)
        Respostas de erro do cliente (400 – 499)
        Respostas de erro do servidor (500 – 599)

        O envio de um pacote de dados sempre terá um header (origem/destino) que seria o nosso protocolo ou caminho
        para chegar ao local onde temos o body (conteúdo presente no pacote de dados)
    
    */

    let estados = estadosCidades.getListaDeEstados()
    response.status(200)
    response.json(estados)
})

app.get('/v1/senai/help', function(request, response){
    let docAPI = {
        "API-description": "API para manipular dados de estados e cidades",
        "Date": "2026-04-02",
        "Development": "Rillao the best",
        "Version": "1.0",
        "EndPoints": [
            {   "id": 1, 
                "Rota 1": "/v1/senai/estados", 
                "obs": "Retorna a lista de todos os estados"
            },
            {   "id": 2, 
                "Rota 2": "/v1/senai/dados/estados/sp", 
                "obs": "Retorna os dados do estado filtrando pela sigla do estado"
            },
            {   "id": 3, 
                "Rota 3": "/v1/senai/capital/estados/sp", 
                "obs": "Retorna os dados da capital filtrando pela sigla do estado"
            },
            {   "id": 4, 
                "Rota 4": "/v1/senai/estados/capital/brasil", 
                "obs": "Retorna todos os estados que formaram capital do Brasil"
            },
            {   "id": 5, 
                "Rota 5": "/v1/senai/estados/regiao/norte", 
                "obs": "Retorna todos os estados referentes a uma região"
            },
            {   "id": 6, 
                "Rota 6": "/v1/senai/cidades/estados/sp", 
                "obs": "Retorna todos as cidades filtrando pela sigla do estado"
            }
        ] 
    }

    response.status(200)
    response.json(docAPI)
})

/*
    Tem como utilidade incializar a API para receber requisições (Deixar a API escutando a requisição),
    o 8080 é a porta de inicialização da API, como é uma função de callBack, é necessário fazer uma função
*/
app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições...")
})