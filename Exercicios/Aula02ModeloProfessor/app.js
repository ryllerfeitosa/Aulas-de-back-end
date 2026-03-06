console.log("Hello world :)")
var readline = require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o seu nome:', function (nomeUsuario) {
    //Não converter o tipo de dado para número com escopo global, pois ao converter, o vázio retorna 0, e 0 é uma nota, então os espaços vazios será falso
    entradaDeDados.question("Digite a sua nota 1:", function (valorUm) {
        entradaDeDados.question("Digite a sua nota 2:", function (valorDois) {
            entradaDeDados.question("Digite a sua nota 3:", function (valorTres) {
                entradaDeDados.question("Digite a sua nota 4:", function(valorQuatro){
                    //Validação de entrada vazia
                    if(nomeUsuario == '' || valorUm == '' || valorDois == '' || valorTres == '' || valorQuatro == ''){
                        console.log("ERRO: É obrigatório o preenchimento de todos os espaços!!!")
                        //Validação de números entre 0 e 100
                    }else if(valorUm < 0 || valorUm > 100 || valorDois < 0 || valorDois > 100 || valorTres < 0 || valorTres > 100 || valorQuatro < 0 || valorQuatro > 100){
                        console.log("ERRO: As notas devem ser maiores que 0 e menores que 100!!!")
                        //Validação para a entrada de letras nas notas
                        //isNaN() -> permite validar se o conteúdo da variável tem algum caracter ao invés de número
                        //A função do if já possui uma lógica booleana, ou seja, o seu retorno já nível lógico alto, então não precisamos perguntar se a informação é verdadeira
                        //Caso a variável que eu esteja trabalhando tem nível lógico baixo, basta inverter o valor da variável, utilizando o caracter '!' antes da variável.
                    }else if(isNaN(valorUm) || isNaN(valorDois) || isNaN(valorTres) || isNaN(valorQuatro)){
                        console.log("ERRO: É obrigatório o preenchimento das notas somente com números!!!")
                    }else{
                        /*
                        Conversões de tipos de dados
                            parseInt()   ->   Permite converter uma String para valores inteiros
                            parseFloat() ->   Permite converter uma String para valores flutuantes
                            Number()  ->      Permite converter uma String para valores numéricos(inteiros e flutuantes)
                            String()  ->      Permite converter um conteúdo para String
                            Boolean() ->      Permite converter um conteúdo para booleano
                            typeof()  ->      Permite verificar o tipo de dado de uma variável
                            Para o JS as [] (Array) e {} (JSON) são objetos
                        */
                        //É necessário converter o tipo de dado para fazer a soma, pois se não converter o mesmo irá concatenar
                        let statusDoAluno
                        let media = (Number(valorUm) + Number (valorDois) + Number (valorTres) + Number (valorQuatro)) /4
                        if(media < 50){
                            statusDoAluno = ("reprovado!!!")
                        }else if (media >= 50 && media <= 69){
                            statusDoAluno = ("de recuperação!!!")
                        }else{
                            statusDoAluno = ("aprovado!!!")
                        }
                        //toFixed() -> Permite fixar a quantidade de casas decimais
                        console.log("A média do aluno(a) " + nomeUsuario + " é " + media.toFixed(2) + ". Ou seja, o aluno(a) " + nomeUsuario + " está " + statusDoAluno)
                    }
                })
            })
        })   
    })
})
