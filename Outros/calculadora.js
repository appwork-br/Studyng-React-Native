// Exercício: Façamos uma calculadora
// Agora, vamos ver como podemos criar uma função que simula uma calculadora. Começaremos com algo simples...
// Criaremos quatro funções que executarão as principais operações de uma calculadora: seu trabalho será definir as funções: 
// somar, subtrair, multiplicar e dividir. Cada uma delas receberá dois parâmetros e deve executar a operação matemática correspondente. 

// Por exemplo, a função somar deve retornar a soma de ambos os parâmetros, a função subtrair a subtração de ambos os parâmetros e assim 
// por diante.
// Agora, com as funções já definidas, criaremos a função calculadora. Esta função receberá dois parâmetros numéricos e o nome de uma 
// função, que será nosso callback.

function somar(a, b) {
    return a + b
}
console.log(somar(5, 2))

function subtrair(a, b) {
    return a - b
}
console.log(subtrair(5, 2))

function multiplicar(a, b) {
    return a * b
}
console.log(multiplicar(5, 2))

function dividir(a, b) {
    return a / b
}
console.log(dividir(5, 2))

function calculadora(a, b, c){
    return c(a, b)
}
console.log(calculadora(5, 2, somar))