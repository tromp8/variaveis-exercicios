const nome = prompt('Digite seu nome:')
const idade = Number(prompt('Digite sua idade:'))

console.log(typeof nome, typeof idade)

//Se não é colocado "Number" antes do prompt, ele lê como string.

alert(`Olá, ${nome}. Você tem ${idade} anos.`)

const perguntaA = 'Voce gosta de programar?'
const perguntaB = 'Esta gostando do curso?'
const perguntaC = 'Esta feliz com sesu resultados?'

const respostaA = prompt(perguntaA)
const respostaB = prompt(perguntaB)
const respostaC = prompt(perguntaC)

console.log(perguntaA, respostaA ,perguntaB, respostaB, perguntaC, respostaC)