/**
 * Objetivo: Manipular dados utilizando Array e JSON    
 * Data: 05.03.26
 * Autor: Marcel
 * Versão: 1.0
 */

/*
    [ ] -> representa um objeto do tipo Array
    { } -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar com vários valores
    em um único objeto

    Sem array
        let nome  = 'José'
        let nome2 = 'Maria'
        let nome3 = 'Rodrigo'

    O array permite utilizar um único objeto para guardar diversos valores 

    Com array   
            Índice     0        1       2
        let nome = ['José', 'Maria', 'Rodrigo']

    jSON -> É um objeto na memória que permite trabalhar com CHAVE e VALOR

    Sem JSON
        let nome        = 'José'
        let telefone    = '12345678'
        let email       = 'jose@gmail.com'

    Com JSON
        let cliente = {"nome": "José",
                       "telefone": "12345678"
                       "email": "jose@gmail.com"
                       }
    
    O array é semelhante a um vetor
    
           0   1   2   3  
    vetor | | | | | | | |

    matriz 0   1   2   3   4
        0 | | | | | | | | | |
        1 | | | | | | | | | | 
        2 | | | | | | | | | | 
        3 | | | | | | | | | |
        4 | | | | | | | | | |
 */

//O java script permite você gravar diferentes tipos de dados (int, string, booleano)
//Formas de criar um ARRAY
const listaNomes            = [ 'José', 'Maria', 'João', 
                                'André', 'Alex', 'Carlos', 
                                'Ana', 'Bruna', 'Jake']   
const listaDeClientes       = []
const listaDeFornecedores   = []

const exibirDados = function(){
    //Exibe o objeto e seu conteúdo
    console.log(listaNomes)

    //Exibe o objeto array em formato de tabela com seus índices
    console.table(listaNomes)

    //Exibe apenas um valor do respectivo índice do array
    console.log(listaNomes[1])

    //Retorna o tipo de dados de um índice do array
    console.log(typeof(listaNomes[4]))

    /*
    Não é viável fazer dessa forma
    console.log(`O nome do cliente é: ${listaNomes[0]}`)
    console.log(`O nome do cliente é: ${listaNomes[1]}`)
    console.log(`O nome do cliente é: ${listaNomes[2]}`)
    console.log(`O nome do cliente é: ${listaNomes[3]}`)
    console.log(`O nome do cliente é: ${listaNomes[4]}`)
     */

    //Forma mais viável é utilizando um laço de repetição
    let contador = 0
    console.log("************WHILE************")
    while(contador < listaNomes.length){
        console.log(`O nome do cliente é: ${listaNomes[contador]}`)
        contador = contador + 1
    }

    //Utilizando o for
    console.log("************FOR************")
    for(let contadorComFor = 0; contadorComFor < listaNomes.length; contadorComFor++){
        console.log(`O nome do cliente é: ${listaNomes[contadorComFor]}`)
    }

    //Utilizando o for each
    console.log("************FOR EACH************")
    /*
    O forEach() é uma função callBack, ou seja, ele retorna algo, no caso da linha abaixo
    ele percorre o array e retorna o seus próprios índices, não sendo necessário fazer um 
    laço de repetição, sem ser necessário saber o índice, criar uma variável para incrementa-la
    */
    listaNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })

    //Utilizando o for in
    console.log("************FOR IN************")
    /*
    Semelhante ao forEach, ou seja, uma função callBack, porém, o que difere ambos é
    o fato do for in retornar o índice
    */
    for(item in listaNomes){
        console.log(`O nome do cliente é: ${item}`)
    }

    //Utilizando o for of 
    console.log("************FOR OF************")
    /*
    Idêntico ao for of, sendo somente a sintaxe a diferença de ambos
    */
   for(cliente of listaNomes){
    console.log(`O nome do cliente é: ${cliente}`)
   }

   //Visualizar a quantidade de elementos dentro do array listaNomes
   console.log(listaNomes.length)
}

const manipularDados = function(){
    //Adicionando novos valores no array através de índices
    /*
    O java scipit permite você pular índices, enquanto outras linguagens obrigam
    os itens serem colocados em sequência
    */
    listaDeClientes[0] = ('José da silva')
    listaDeClientes[1] =  'Maria da Silva'
    listaDeClientes[2] = ('João da Silva')
    listaDeClientes[4] = ('Alex da Silva') 

    console.log(listaDeClientes)
 
    //Permite adicionar novos valores no array, sempre no FINAL da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da SIlva')
    console.table(listaDeFornecedores)

    //Permite adicionar novos valores no array, sempre no INÍCIO da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)

    //Permite remover valores (objetos) do FINAL da lista do array
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover valores (objetos) do INÍCIO da lista do array
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)
 
    //Splice() -> Permite remover um elemento baseado no indice da lista
    // splice(a partir do indice, quantos indices vao ser apagados a partir do primeiro)
    listaDeFornecedores.splice(2, 1)
    console.table(listaDeFornecedores)
                 
    //Splie() -> Permite adicionar um novo elemento em um determinado lugar do array
    //Indice, 0 -> significa que não será removido ninguém, Novo contéudo 
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
    console.table(listaDeFornecedores)

}

const removerItens = function(nome){
    //for(indice in listaNomes){
        /*Compara o conteúdo do índice, no caso a lógica percorre o array e compara
          o conteúdo de cada índice com o parâmetro nome, o mesmo foi fornecido abaixo
          ao chamar a função
        */
        //if(listaNomes[indice] == nome){
            //listaNomes.splice(indice,1)
        //}
    //}

    //Outra forma de fazer, o indexOf faz o papel do for e do if juntos
    //Retorna o índice de um elemento fazendo a busca pelo conteúdo
    //Se o indexOf não encontrar o conteúdo ele devolve -1
    /*
        O que difere ambos é que o indexOf percorre até encontrar o primeiro elemento, após
        encontrar, o mesmo para de percorrer, já a lógica com for percorre até o último elemento.
     */
    let indice = listaNomes.indexOf(nome)
    console.log(indice)
    if(indice != -1){
        listaNomes.splice(indice,1)
        return true
    }else
        return false
}

const verificarItem = function(nome){
    //Verifica se o conteúdo existe ou não dentro de uma lista, retornando um valor booleano, true or false
    return listaNomes.includes(nome)
    
}

const quantidadeDeItens = function(nome){
    let cont = 0
    listaNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont = cont + 1
    })
    return cont
}

const criandoDadosJSON = function(){
/*
    A diferença entre array e JSON é que o array possui índices, enquanto o JSON é um objeto que possui atributos,
    sendo atributos de diferentes tipos de dados.
*/
    let aluno = {   "nome": "José", 
                    "ra": 12345, 
                    "telefone": "9757574414", 
                    "email": "jose@gmail.com"}
    //Exibindo o objeto JSON por completo
    console.table(aluno)
    //Exibindo apenas um atributo do objeto JSON
    console.table(aluno.nome)
    console.table(aluno.ra)

    //Adiciona um novo atributo no JSON
    aluno.sexo = "masculino"
    console.log(aluno)

    //Remove um atributo do JSON
    delete aluno.telefone
    console.log(aluno)
}

const cadastroDeProdutos = function(){
    let cores = [
        {"id": 1, "nome": "branco" }, //Índice 0
        {"id": 2, "nome": "preto"  }, //Índice 1
        {"id": 3, "nome": "azul"   }, //Índice 2
        {"id": 4, "nome": "rosa"   }, //Índice 3
        {"id": 5, "nome": "cinza"  }  //Índice 4
    ]

    let marcas = [
        {"id": 1, "marca": "Dell",      "telefone": "123456789", "email": "contato@gmail.com"},
        {"id": 2, "marca": "Positivo",  "telefone": "123456789", "email": "contato@gmail.com"},
        {"id": 3, "marca": "Samsung",   "telefone": "123456789", "email": "contato@gmail.com"},
        {"id": 4, "marca": "Lenovo",    "telefone": "123456789", "email": "contato@gmail.com"},
        {"id": 5, "marca": "Apple",     "telefone": "123456789", "email": "contato@gmail.com"},
        {"id": 6, "marca": "Rayzer",    "telefone": "123456789", "email": "contato@gmail.com"},
        {"id": 7, "marca": "Logitech",  "telefone": "123456789", "email": "contato@gmail.com"}
    ]

    let produtos = [
        {   "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 polegadas",
         //Atributo: Objeto[índice].atributo
            "marca": [marcas[0].marca],
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1]
            ],
            "valor": 800.50},

        {   "id": 2,
            "nome": "Teclado",
            "descricao": "Teclado mecânico RGB",
            "marca": [marcas[5].marca],
            "qtde": 200,
            "cor": cores,
            "preco": 150},

        {   "id": 3,
            "nome": "Mouse sem fio",
            "descricao": "Teclado mecânico RGB",
            "marca": [marcas[0].marca,
                      marcas[1].marca,
                      marcas[5].marca],
            "qtde": 200,
            "cor":[ cores[0],
                    cores[1],
                    cores[3]],
            "preco": 100}
    ]

    //Exibindo a atributo nome do objeto cor no índice 2
    //console.log(cores[2].nome)
    // console.log(produtos)
    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].nome)
    // console.table(produtos)

    // produtos[0].cor.forEach(function (nomeCor) {
    //     console.log("A cor do produto é: " + nomeCor.nome)
    // })

    //Percorre o objeto produto para trazer os dados de cada produto
    produtos.forEach(function(itemProduto){
        console.log(`Produto: ${itemProduto.nome}`)

        //Percorre o objeto marca dentro de cada produto para trazer as marcas
        itemProduto.marca.forEach(function(itemMarca){
            console.log(`         Marca: ${itemMarca}`)
        })

        //Percorre o objeto de cor dentro de cada produto, para trazer as cores
        itemProduto.cor.forEach(function(itemCor){
            console.log(`         Cor: ${itemCor.nome}`)
        })
    })
    /*
     Ao tentar imprimir o objeto por completo, a mensagem que será dada são os
     objetos, pois temos uma estrutura onde temos um array e, dentro desse array,
     temos dois JSON, ou seja, 2 objetos, portanto, o js não sabe "como" descrever o objeto,
     então é necessário utilizar o atributo logo após o objeto.
    */

     //Pesquisando o produto pelo nome
     console.log("Pesquisando os produtos pelo nome")
     let nome = 'Mouse sem fio'

     produtos.forEach(function(itemProduto){
        if(String(itemProduto.nome).toUpperCase() == String(nome).toUpperCase())
            console.log(itemProduto)
     })

     //Pesquisando produtos pela cor
     console.log("Pesquisando produtos pela cor")

     let cor    = 'laranja'
     let status = false
     produtos.forEach(function(itemProduto){
        itemProduto.cor.forEach(function(itemCor){
            if(String(itemCor.nome).toUpperCase() == String(cor).toUpperCase())
                console.log(itemProduto)
                status = true
        })
     })

     if(!status)
        console.log("Itens pesquisado não foram encontrados!!!")

}

cadastroDeProdutos()

// let resposta = removerItens('Maria')
// if(resposta)
//     console.log('Item removido com sucesso!!!')
// else
//     console.log('Não foram encontrados itens para a remoção')
// console.table(listaNomes)
