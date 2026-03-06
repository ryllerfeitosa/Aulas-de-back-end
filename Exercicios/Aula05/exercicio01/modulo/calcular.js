/*********************************************************************************
 * Objetivo: Arquivo responsável pela tratativa de erros e cálculo de IMC
 * Data: 20.02.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************/


//Função anônima para calcular o IMC
const calculoDeImc = function(massaCorporal, altura){
    //Fórmula de IMC
    let resultado = massaCorporal / ((altura / 100)**2)
    //Saída
    if(resultado){
        return Number(resultado).toFixed(2)
    }else{
        return false
    }
}

//Tratativa de erros
const tratarErros = function(massaCorporal, altura){
    if(massaCorporal == '' || isNaN(massaCorporal) || altura == '' || isNaN(altura)){
        console.log('ERRO: Os campos não podem ficar vazios e devem ser preenchidos somente com número!!!')
        return false
    }else
        return true
}

//Classificar o IMC (Processamento)
const classificarImc = function(resposta){
    let mensagem
    if(resposta < 18.5){
        mensagem = ('Você está abaixo do peso')
    }else if(resposta >= 18.5 && resposta <=24.9){
        mensagem = ('Você está com o peso normal')
    }else if(resposta >= 25 && resposta <= 29.9){
        mensagem = ('Você está acima do peso (sobrepeso)')
    }else if(resposta >= 30 && resposta <= 34.9){
        mensagem = ('Você está com obesidade do tipo I')
    }else if(resposta >= 35 && resposta <= 34.9){
        mensagem = ('Você está com obesidade do tipo II')
    }else if(resposta >= 40){
        mensagem = ('Você está com obesidade do tipo III')
    }


    //Saída
    if(resposta != undefined)
        return mensagem
    else
        return false
}


module.exports = {
    calculoDeImc,
    tratarErros,
    classificarImc
}
