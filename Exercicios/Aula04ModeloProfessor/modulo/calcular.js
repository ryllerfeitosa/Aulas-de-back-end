/**************************************************************************************************
 * Objetivo: Arquivo responsável pelas funções de calcular(Somar, subtrair, dividir e multiplicar)
 * Data: 20.02.26
 * Nome: Riller
 * Versão: 1.0
 **************************************************************************************************/
//toUpperCase() -> Retorna a string em maiúsculo
//toLowerCase() -> Retorna a string em minúsculo


//Modelo de função anônima, pois ela não possui nome, o nome da função é o nome da variável const
//Calcular as 4 operações matemáticas
const calcular = function(numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let resultado
    let operadorMatematico = String(operador).toUpperCase()
    
    //Condicionais para validar qual o tipo de operação matemática
    /*As '{}' servem para blocos de códigos acima de 1 linha, ou seja, com uma linha não é necessário coloca-las, 
    aplica-se para diversas funções (Condicionais, laços de repetição)*/

    //Processamento utilizando o if
    /*if(operadorMatematico == 'SOMAR')
        resultado = valor1 + valor2
    else if(operadorMatematico == 'SUBTRAIR')
        resultado = valor1 - valor2
    else if(operadorMatematico == 'MULTIPLICAR')
        resultado = valor1 * valor2
    else if(operadorMatematico == 'DIVIDIR')
        resultado = valor1 / valor2
    */

    //Processamento utilizando o swith case
    switch(operadorMatematico){
        case 'SOMAR': //Mesma funcionalidade do if, os demais case seriam como else if
            resultado = somar(valor1, valor2)
            break; //Executar e sair da função
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break;
        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR':
            resultado = dividir(valor1, valor2)
            break;
        default: //Mesma funcionalidade do 'else' no 'if', caso nenhum case seja verdade, irá para o default
            return false
            break;
    }

    //Saída
    if(resultado != undefined)
        return Number(resultado).toFixed(2)
    else
        return false

    //Outra forma de fazer, dessa forma haverá um retorno falso e não undefined
    /*
        //Declarar a variável global 'resultado' recebendo false
        ...(restante do código)
        let resultado = false
        ....(Restante do código)
        return resultado
    */

}

//Função baseada em seta
const somar         = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair      = (numero1, numero2) => Number(numero1) - Number(numero2)
const dividir       = (numero1, numero2) => Number(numero1) / Number(numero2)
const multiplicar   = (numero1, numero2) => Number(numero1) * Number(numero2)
/*
A função baseada em seta tem como característica executar o que está depois da seta e retorna um valor
automaticamente de acordo com o que foi executado, a vantagem é a redução na quantidade de linhas no
código, pois é somente uma linha.
*/

module.exports = {
    calcular,
    multiplicar
}
