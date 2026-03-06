/*********************************************************************************
 * Objetivo: Arquivo responsável pela tratativa de erros e cálculo da média escolares
 * Data: 27.02.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************/

//Tratar erros de digitação das notas
function tratativaDeErrosDasNotas(nota1, nota2, nota3, nota4){
    if(nota1 == '' || isNaN(nota1) || nota2 == '' || isNaN(nota2) || nota3 == '' || isNaN(nota3) || nota4 == '' || isNaN(nota4)){
        console.log('ERRO: As notas devem ser preenchidas com número e sem espaço vazio')
        return false
    }else{
        if(nota1 > 0 && nota1 <= 100 && nota2 > 0 && nota2 <= 100 && nota3 > 0 && nota3 <= 100 && nota4 > 0 && nota4 <= 100)
            return true
        else{
            console.log('ERRO: As notas devem ser preechidas com números de 0 a 100!!!')
            return false
        }
    }
}

//Tratar erros de digitação dos dados de entrada
function tratativaDeErrosDasDemaisEntradas(nomeDoAluno, nomeDoProfessor, sexoDoAluno, sexoDoProfessor, nomeDoCurso, nomeDaDisciplina){
    if(nomeDoAluno == '' || nomeDoProfessor == '' || sexoDoAluno == '' || sexoDoProfessor == '' || nomeDoCurso == '' || nomeDaDisciplina == ''){
        console.log("ERRO: Todos os campos devem ser preenchidos!!!")
        return false
    }else
        return true
}

//Função para calcular a média do aluno
function calcularMedia(nota1, nota2, nota3, nota4){
    let media = ((Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4)
    if(media != undefined)
        return media
    else
        return false
}

//Função para verificar a situação do aluno
function situacaoDoAluno(media){
    let situacao
    if(media >= 70)
        situacao = ('aprovado')
    else if(media < 50)
        situacao = ('reprovado')
    else if(media >= 50 && media <= 69)
        situacao = ('recuperação')
    if(media != undefined)
        return situacao
    else
        return false

}

//Função para caso o aluno esteja de recuperação
function recuperacao(notaDoExame, media){
    let notaFinal = (Number(notaDoExame) + Number(media)) / 2
    if(notaFinal != undefined)
        return notaFinal
    else
        return false
}

//Função para verificar a situação final do aluno
function situacaoFinalDoAluno(respostaComRecuperacao, sexoDoAluno){
    let situacao
    if(respostaComRecuperacao >= 60 && sexoDoAluno == 'masculino')
        situacao = 'aprovado'
    else if (respostaComRecuperacao <= 60 && sexoDoAluno == 'masculino')
        situacao = 'reprovado'
    else if(respostaComRecuperacao >= 60 && sexoDoAluno == 'feminino')
        situacao = 'aprovada'
    else if(respostaComRecuperacao >= 60 && sexoDoAluno == 'feminino')
        situacao = 'reprovada'
    if(situacao != undefined)
        return situacao
    else
        return false
}



//Função para exibir a mensagem final do relatório
function mensagemFinal(sexoFinalDoAluno, nomeDaDisciplina, nomeDoCurso, sexoFinalDoProfessor, nota1, nota2, nota3, nota4,
    notaDoExame, mediaDoAluno, respostaComRecuperacao){
        let mensagem = console.log(sexoFinalDoAluno + ' na disciplina ' + nomeDaDisciplina + '.\n'
            + 'Curso: ' + nomeDoCurso + '\n' + sexoFinalDoProfessor +  '\n' + 'Notas do(a) aluno: ' 
            + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ' + notaDoExame + '\n'
            + 'Média final: ' + mediaDoAluno + '\n' + 'Média final do exame: ' + respostaComRecuperacao
        )

        return mensagem
    }

//Função para exibir a mensagem final do relatório
function mensagemFinalSemRecuperacao(sexoFinalDoAluno, nomeDaDisciplina, nomeDoCurso, sexoFinalDoProfessor, nota1, nota2, nota3, nota4,
    respostaFinal){
        let mensagem = console.log(sexoFinalDoAluno + ' na disciplina ' + nomeDaDisciplina + '.\n'
            + 'Curso: ' + nomeDoCurso + '\n' + sexoFinalDoProfessor +  '\n' + 'Notas do(a) aluno: ' 
            + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\n'
            + 'Média final: ' + respostaFinal
        )
        return mensagem
    }




//Verificar o sexo do aluno
function tratativaDoSexoDoAluno(sexoDoAluno, nomeDoAluno, situacaoFinalDoAluno){
    let definindoOSexoDoAluno
    if(sexoDoAluno == 'masculino')
        definindoOSexoDoAluno = ('O aluno ' + nomeDoAluno + ' foi ' + situacaoFinalDoAluno)
    else
        definindoOSexoDoAluno = ('A aluna ' + nomeDoAluno + ' foi ' + situacaoFinalDoAluno)

    if(definindoOSexoDoAluno != undefined)
        return definindoOSexoDoAluno
    else
        return false
}

//Verificar o sexo do professor
function tratativaDoSexoDoProfessor(sexoDoProfessor, nomeDoProfessor){
    let definindoOSexoDoProfessor
    if(sexoDoProfessor == 'masculino')
        definindoOSexoDoProfessor = ('professor: ' + nomeDoProfessor)
    else
        definindoOSexoDoProfessor = ('professora: '  + nomeDoProfessor)
    if(definindoOSexoDoProfessor != undefined)
        return definindoOSexoDoProfessor
    else
        return false
}


module.exports = {
    tratativaDeErrosDasNotas,
    tratativaDeErrosDasDemaisEntradas,
    calcularMedia,
    recuperacao,
    situacaoFinalDoAluno,
    situacaoDoAluno,
    tratativaDoSexoDoAluno,
    tratativaDoSexoDoProfessor, 
    mensagemFinal,
    mensagemFinalSemRecuperacao
}