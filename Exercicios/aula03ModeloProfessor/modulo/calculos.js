/*******************************************
 * Objetivo: Arquivo responsável pelas funções de cálculos para este projeto 
 * 
 * Data: 11.02.26
 * Versão: 1.0
 ******************************************/

//Criando a função para  calcular o valor da compra parcelada
//Método tradicional de criar uma função
function calcularJurosCompostos(capitalProduto, taxaJuros, tempo){
    //Recebe os argumentos da função em variáveis locais
    //Ás variáveis (valor, taxa e tempo são numéricas por conta da conversão)
    //Mas os argumentos(capitalProduto, taxaDeJuros, tempoDePagamentoDoProduto ainda serão Strings)
    let valorCompra = Number(capitalProduto)
    let taxaDeJuros = Number(taxaJuros)
    let tempoDePagamentoDoProduto = Number(tempo)

    if(valorCompra == '' || isNaN(valorCompra) || valorCompra <= 0 || tempoDePagamentoDoProduto == '' || isNaN(tempoDePagamentoDoProduto) || tempoDePagamentoDoProduto <= 0){
        console.log("ERRO: Valores de compra ou tempo de pagamento estão incorretos!!!")  //Não obrigatório para a tratativa de dados
        return false
    }else{

        //Chama a função para converter o percentual em decimal e guarda o valor na variável percentual
        let percentual = calcularPercentual(taxaDeJuros)

        if(percentual){
            let montante = valorCompra * ((1 + percentual) **tempo)
            return Number(montante.toFixed(2))
        }else{
            /*Necessário fazer a tratativa com retorno booleano falso, pois a função calcularPercentual(){} retorna falso
            mas a função calcularJurosCompostos(){} não retorna nada, ou seja, calcularPercentual retorna falso para calcularJurosCompostos,
            mas calcularJurosCompostos não retorna nada para entradaDeDados
            */
            return false 
        }
    }
}

//Calcula o percentual de um número
function calcularPercentual(numero){
    let numeroPercentual = Number(numero)
    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        console.log("ERRO: Valor de percentual está incorreto!!!")   //Não obrigatório
        return false //Não pode processar
    }else{
        //Processamento do cálculo do percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))    //O toFixed() converte para String, logo, convertemos para número
    }
    
}

//Tornando as duas funções públicas para este projeto
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}

/*
    Caso a função necessite de algum dado externo, o mesmo entra na área de argumentos (parâmetros de entrada);
    Toda a função deve ter no mínimo um retorno booleano (true or false);
    A função é somente para executar um trecho de código em diversas partes diferentes do algorítmo, portanto,
    a mesma é criada fora de outras funções;
    Ideal que toda função faça a sua própria tratativa, mesmo que tenha sido feita em outra função.
    Caso a gente queira utilizar essas funções em outros arquivos, é necessário torna-las públicas
*/