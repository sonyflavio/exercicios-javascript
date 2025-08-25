/* Com base na tabela , escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) 
e a quantidade comprada deste item (número inteiro).
A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado. */

const leia = require('readline-sync')

let produto, quantidade, preco, valorTotal

produto = leia.questionInt(`
=========================================
           CARDAPIO DE PRODUTOS          
=========================================
 CODIGO     PRODUTO              PRECO   
-----------------------------------------
   1     Cachorro Quente      R$ 10.00
   2     X-Salada             R$ 15.00
   3     X-Bacon              R$ 18.00
   4     Bauru                R$ 12.00
   5     Refrigerante         R$  8.00
   6     Suco de Laranja      R$ 13.00
-----------------------------------------
Digite o codigo do produto desejado: `)

quantidade = leia.questionInt("Digite a quantidade: ")

switch (produto) {

    case 1:
        produto = "Cachorro Quente"
        preco = 10.00
        valorTotal = quantidade * preco
        console.log("Produto: " + produto)
        console.log("Valor Total: R$ " + valorTotal.toFixed(2) )
        break
    case 2:
        produto = "X-Salada "
        preco = 15.00
        valorTotal = quantidade * preco
        console.log("Produto: " + produto)
        console.log("Valor Total: R$ " + valorTotal.toFixed(2) )
        break    
    case 3:
        produto = "X-Bacon "
        preco = 18.00
        valorTotal = quantidade * preco
        console.log("Produto: " + produto)
        console.log("Valor Total: R$ " + valorTotal.toFixed(2) )
        break    
    case 4:
        produto = "Bauru "
        preco = 12.00
        valorTotal = quantidade * preco
        console.log("Produto: " + produto)
        console.log("Valor Total: R$ " + valorTotal.toFixed(2) )
        break
    case 5:
        produto = "Refrigerante"
        preco = 8.00
        valorTotal = quantidade * preco
        console.log("Produto: " + produto)
        console.log("Valor Total: R$ " + valorTotal.toFixed(2) )
        break    
    case 6:
        produto = "Suco de Laranja"
        preco = 13.00
        valorTotal = quantidade * preco
        console.log("Produto: " + produto)
        console.log("Valor Total: R$ " + valorTotal.toFixed(2) )
        break
    default:
        console.log("Produto não encotrado, digite apenas os produtos do Cardápio.")    
        

}



