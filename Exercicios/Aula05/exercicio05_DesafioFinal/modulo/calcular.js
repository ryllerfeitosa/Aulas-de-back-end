/********************************************************************************************
 * Objetivo: Arquivo responsável pela tratativa de erros e funções para cálculos
 * Data: 15.03.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

const tratativaDeErros = function(numeroInicial, numeroFinal, verNumeros){
    let numeroInicialConvertido = Number(numeroInicial)
    let numeroFinalConvertido   = Number(numeroFinal)
    let verNumerosComUpperCase  = verNumeros.toUpperCase() 
    if(numeroInicial == '' || numeroFinal == '' || verNumeros == ''){
        console.log("ERRO: Todos os dados devem ser preechidos!!!")
        return false
    }else if(numeroInicialConvertido < 0 || numeroInicialConvertido > 500){
        console.log("ERRO: O número incial deve estar entre 0 e 500!!!")
        return false
    }else if(numeroFinalConvertido < 100 || numeroFinalConvertido > 1000){
        console.log("ERRO: O número final deve estar entre 100 e 1000!!!")
    }else if(numeroInicialConvertido > numeroFinalConvertido){
        console.log("ERRO: O número incial não pode ser maior que o número final!!!")
        return false        
    }else if(numeroInicialConvertido == numeroFinalConvertido){
        console.log("ERRO: O número incial não pode ser igual ao número final!!!")
        return false         
    }else if(verNumerosComUpperCase != 'PARES' && verNumerosComUpperCase != 'ÍMPARES' && verNumerosComUpperCase != 'TODOS'){
        console.log("ERRO: Preencha somente com: pares, ímpares ou todos!!!")
        return false 
    }else
        return true 
}

//Função para separar números pares
const separarNumerosPares = function(numeroInicial, numeroFinal){
    let numeroParesSeparados = []
    let numeroInicialConvertido = Number(numeroInicial)
    let numeroFinalConvertido   = Number(numeroFinal)

    if(numeroFinalConvertido != undefined && numeroInicialConvertido != undefined){

        //Fórmula para caso o número inicial for ímpar, o '%' indica que se o resto da divisao por 2 for diferente de '0', a condicional sera executada
        if (numeroInicialConvertido % 2 != 0)
            numeroInicialConvertido++

        //Fórmula para calcular a quantidade de números pares
        for(numeroInicialConvertido; numeroInicialConvertido <= numeroFinalConvertido; numeroInicialConvertido += 2){
            numeroParesSeparados.push(numeroInicialConvertido)
        }
        return numeroParesSeparados
    }else
        return false
}

//Função para separar números ímpares
const separarNumerosImpares = function(numeroInicial, numeroFinal){
    let numerosImparesSeparados = []
    let numeroInicialConvertido = Number(numeroInicial)
    let numeroFinalConvertido   = Number(numeroFinal)

    if(numeroFinalConvertido != undefined && numeroInicialConvertido != undefined){

        //Fórmula para caso o número inicial for par, o '%' indica que se o resto da divisao por 2 for diferente de '0', a condicional sera executada
        if (numeroInicialConvertido % 2 == 0){
            numeroInicialConvertido++
        }
        //Fórmula para calcular a quantidade de números pares
        for(numeroInicialConvertido; numeroInicialConvertido <= numeroFinalConvertido; numeroInicialConvertido += 2){
            numerosImparesSeparados.push(numeroInicialConvertido)
        }
        return numerosImparesSeparados
    }else
        return false
}

//Exibir mensagem de todos os valores
const exibirMensagem = function(numerosPares,numeroImpares){
    if(numerosPares != undefined && numeroImpares != undefined){
        let mensagem = 'Números pares: ' + numerosPares + '\n' + 'Números ímpares: ' + numeroImpares
        return mensagem
    }else
        return false
}

//Exibir mensagem dos ímpares
const exibirMensagemImpares = function(numeroImpares){
    if(numeroImpares != undefined){
        let mensagem = 'Números ímpares: ' + numeroImpares
        return mensagem
    }else
        return false
}

//Exibir mensagem dos pares
const exibirMensagemPares = function(numerosPares){
    if(numerosPares != undefined){
        let mensagem = 'Números pares: ' + numerosPares
        return mensagem
    }else
        return false
}


module.exports = {
    tratativaDeErros, 
    separarNumerosPares,
    separarNumerosImpares,
    exibirMensagem,
    exibirMensagemImpares,
    exibirMensagemPares
}