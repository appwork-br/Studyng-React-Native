// Exercício: Passando um Callback
// Vamos criar três funções e ver como iniciar a trabalhar com os callbacks.
// A primeira função se chamará dobro, que receberá um número e retornará o dobro.
// A segunda função se chamará triplo, que receberá um número e retornará o triplo.
// A terceira função será chamada de aplicar, receberá um valor e o nome de uma função como parâmetro. Ela retornará o valor da aplicação da referida função ao valor recebido.
// Exemplo:
// aplicar(2, dobro); // 4
// aplicar(4, triplo); // 12

function dobro(params) {
    return params*2
}
console.log(dobro(2))

function triplo(params) {
    return params*3
}
console.log(triplo(4))

function aplicar(a, b) {
    return b(a)

}

console.log(aplicar(2, dobro))
console.log(aplicar(4, triplo))
