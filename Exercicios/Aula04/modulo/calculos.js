//Função para tratar os erros de digitação do usuário
function tratativaDeErros(primeiroNumero, segundoNumero, operacaoMatematica) {
    //Formatação dos números digitados com vírgula
    let primeiroNumeroFormatado = primeiroNumero.replace(",", ".")
    let segundoNumeroFormatado  = segundoNumero.replace(",",".")
    //Tratativa de erros
    if ((segundoNumero == '0') && operacaoMatematica == 'dividir') {  //Operador lógico && tem prioridade sobre o ||, portanto, é necessário coloca-lo sobre parênteses
        console.log("ERRO: Não existe divisão por 0!!!")
        return false
    } else if (primeiroNumero == '' || isNaN(primeiroNumeroFormatado) || segundoNumero == '' || isNaN(segundoNumeroFormatado)) {
        console.log("ERRO: Os valores numéricos devem ser preenchidos com números e sem espaço vazio!!!")
        return false
    } else if (operacaoMatematica == '' || operacaoMatematica != 'somar' && operacaoMatematica != 'subtrair' && operacaoMatematica != 'multiplicar' && operacaoMatematica != 'dividir') {
        console.log("ERRO: A operação matemática deve ser preenchida somente com: somar, subtrair, dividir ou multiplicar!!!")
        return false
    } else {
        return true
    }
}

//Função para tratar duas casas decimais
function tratarErroDeDoisSeparadoresDecimais(primeiroNumero, segundoNumero) {
    //Verificar se o usuário digitou duas vírgulas ou dois pontos em um mesmo número
    const regexMultiplosSeparadores = /[.,].*[.,]/
    if (regexMultiplosSeparadores.test(primeiroNumero) || regexMultiplosSeparadores.test(segundoNumero)) {
        console.log("ERRO: Os números não podem ter mais de um separador decimal!!!")
        return false
    } else {
        return true
    }
}

//Função para realizar as operações matemáticas
function calcularOperacaoMatematica(primeiroNumero, segundoNumero, operacaoMatematica) {
    //Formatação dos números digitados com vírgula
    let primeiroNumeroFormatado = primeiroNumero.replace(",", ".")
    let segundoNumeroFormatado = segundoNumero.replace(",", ".")
    //Conversão da String para número
    let firstNumber = Number (primeiroNumeroFormatado)
    let secondNumber = Number(segundoNumeroFormatado)
    if (operacaoMatematica == 'somar') {
        let resultado = firstNumber + secondNumber
        return resultado
    } else if (operacaoMatematica == 'subtrair') {
        let resultado = firstNumber - secondNumber
        return resultado
    } else if (operacaoMatematica == 'dividir') {
        let resultado = firstNumber / secondNumber
        return resultado
    } else if (operacaoMatematica == 'multiplicar') {
        let resultado = firstNumber * secondNumber
        return resultado
    } else {
        return false
    }
}


//Tornando as funções públicas para este projeto
module.exports = {
    tratativaDeErros,
    calcularOperacaoMatematica,
    tratarErroDeDoisSeparadoresDecimais
}