// Exercício: Passando um Callback recarregado
// Sua tarefa agora é criar duas funções:
// A primeira função deverá se chamar adicionarHttp, a mesma receberá por parâmetro uma URL que será
// concatenada com a string "http://" no começo da URL e em seguida retornará esse valor. A segunda função se chamará processar
// e receberá uma lista de sites web e uma função. A função processar  retornará um array contendo todos os resultados aplicando
// a função que foi passada.

const url = 'http://'
const lista = ['google.com.br','g1.com.br','astralpaes.com.br']

function adicionarHttp(params) {
    return url+params
}
console.log(adicionarHttp('www.appwork.com.br'))

function processar(a, b){
    let newarray = []

    for(let x = 0; x < a.length; x++){
        newarray.push(b(a[x]))
    }
    
    return newarray
}
console.log(processar(lista, adicionarHttp))
