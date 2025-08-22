const leia = require('readline-sync')

let nota1 = leia.questionFloat("Digite a primeira nota: ")
let nota2 = leia.questionFloat("Digite a primeira nota: ")
let nota3 = leia.questionFloat("Digite a primeira nota: ")
let nota4 = leia.questionFloat("Digite a primeira nota: ")

let media = (nota1+nota2+nota3+nota4)/4

console.log("Média final: ", media.toFixed(1))