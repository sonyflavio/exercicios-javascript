/* Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e
 imprima na tela se a soma de A + B é maior, menor ou igual a C */

const leia = require('readline-sync')

let A, B, C, soma

A = leia.questionInt("Digite o primeiro numero: ")
B = leia.questionInt("Digite o segundo numero: ")
C = leia.questionInt("Digite o terceiro numero: ")

soma = A + B


if( soma > C){
    console.log("A Soma de A + B é Maior do que C")

}else if( soma < C){
    console.log("A soma de A + B é Menor do que C")

}else{
    console.log("A soma de A + B é igual a C")
}

