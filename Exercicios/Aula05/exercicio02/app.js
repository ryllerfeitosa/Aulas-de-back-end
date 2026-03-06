/********************************************************************************************
 * Objetivo: Arquivo responsável pela entrada de informações e administração do processamento
 * Data: 27.02.26
 * Nome: Riller
 * Versão: 1.0
 ********************************************************************************************/

console.log("Olá usuário :)")
const { sourceMapsEnabled } = require("process")
var readline = require("readline")

var dadosDeEntrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importação do modulo de funções de tratativa de erros e cálculos matemáticos 
const calcularMediaDoAluno = require('./modulo/calcular.js')

//Solicitando os dados de entrada
dadosDeEntrada.question('Por gentileza, digite o nome do aluno: ', function(nomeDoAluno){
    dadosDeEntrada.question('Por gentileza, digite o nome do professor: ', function(nomeDoProfessor){
        dadosDeEntrada.question('Por gentileza, digite o sexo do aluno: ', function(sexoDoAluno){
            dadosDeEntrada.question('Por gentileza, digite o sexo do professor: ', function(sexoDoProfessor){
                dadosDeEntrada.question('Por gentileza, digite o nome do curso: ', function(nomeDoCurso){
                    dadosDeEntrada.question('Por gentileza, digite o nome da disciplina: ', function(nomeDaDisciplina){
                        dadosDeEntrada.question('Por gentileza, digite a nota 1: ', function(nota1){
                            dadosDeEntrada.question('Por gentileza, digite a nota 2: ', function(nota2){
                                dadosDeEntrada.question('Por gentileza, digite a nota 3: ', function(nota3){
                                    dadosDeEntrada. question('Por gentileza, digite a nota 4: ', function(nota4){
                                        let respostaFinal = calcularMediaDoAluno.tratativaDeErrosDasNotas(nota1, nota2, nota3, nota4)
                                        //Verificando se as notas foram digitadas corretamentes
                                        if(respostaFinal){
                                            respostaFinal = calcularMediaDoAluno.tratativaDeErrosDasDemaisEntradas(nomeDoAluno, nomeDoProfessor, sexoDoAluno, sexoDoProfessor)
                                            //Verificando se as demais entradas foram digitadas corretamente
                                            if(respostaFinal){
                                                respostaFinal = calcularMediaDoAluno.calcularMedia(nota1, nota2, nota3, nota4)
                                                //Verificando a situação do aluno de acordo com a sua média
                                                if(respostaFinal){
                                                    let situacaoDoAluno = calcularMediaDoAluno.situacaoDoAluno(respostaFinal)
                                                    if(situacaoDoAluno != 'recuperação'){
                                                        //Verifificando o sexo do aluno
                                                        let sexoFinalDoAluno = calcularMediaDoAluno.tratativaDoSexoDoAluno(sexoDoAluno, nomeDoAluno, situacaoDoAluno)
                                                        //Verificando o sexo do professor
                                                        let sexoFinalDoProfessor = calcularMediaDoAluno.tratativaDoSexoDoProfessor(sexoDoProfessor, nomeDoProfessor)
                                                        let mensagem = calcularMediaDoAluno.mensagemFinalSemRecuperacao(sexoFinalDoAluno, nomeDaDisciplina, nomeDoCurso, sexoFinalDoProfessor, nota1, nota2, nota3, nota4,
                                                            respostaFinal
                                                        )
                                                        if(mensagem){
                                                            console.log(mensagem)
                                                            dadosDeEntrada.close()
                                                        }else
                                                            return false                                                        
                                                                                                                          
                                                    }
                                                    else{
                                                        //Solicitando a nota do exame do aluno(a)
                                                        dadosDeEntrada.question('Por gentileza, digite a sua nota do exame: ', function(notaDoExame){
                                                            //Calculando a média do aluno
                                                            let mediaDoAluno = calcularMediaDoAluno.calcularMedia(nota1, nota2, nota3, nota4)
                                                            //Calculando a média final com a nota do exame
                                                            let respostaComRecuperacao = calcularMediaDoAluno.recuperacao(notaDoExame, mediaDoAluno)
                                                            if(respostaComRecuperacao){
                                                                //Verificando a situação final do aluno após a recuperação
                                                                let situacaoFinalDoAluno = calcularMediaDoAluno.situacaoFinalDoAluno(respostaComRecuperacao, sexoDoAluno)
                                                                //Verificando o sexo do professor
                                                                let sexoFinalDoProfessor = calcularMediaDoAluno.tratativaDoSexoDoProfessor(sexoDoProfessor, nomeDoProfessor)
                                                                //Verificando o sexo do aluno
                                                                let sexoFinalDoAluno     = calcularMediaDoAluno.tratativaDoSexoDoAluno(sexoDoAluno, nomeDoAluno, situacaoFinalDoAluno)
                                                                let mensagem = calcularMediaDoAluno.mensagemFinal(sexoFinalDoAluno, nomeDaDisciplina, nomeDoCurso, sexoFinalDoProfessor, nota1, nota2, nota3, nota4,
                                                                    notaDoExame, mediaDoAluno, respostaComRecuperacao
                                                                )
                                                                if(mensagem){
                                                                    console.log(mensagem)
                                                                    dadosDeEntrada.close()
                                                                }else
                                                                    return false
                                                            }else{
                                                                dadosDeEntrada.close()
                                                                return false
                                                            }
                                                                
                                                        })
                                                    }
                                                }else{
                                                    dadosDeEntrada.close()
                                                    return false
                                                }
                                            }else{
                                                dadosDeEntrada.close()
                                                return false
                                            }
                                        }else{
                                            dadosDeEntrada.close()
                                            return false
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})