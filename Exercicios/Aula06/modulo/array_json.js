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
const listaNomes            = ['José', 'Maria', 'João', 'André', 'Alex']   
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
 
    //Permite adicionar novos valores no array, sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da SIlva')

    console.log(listaDeFornecedores)
}

manipularDados()