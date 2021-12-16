function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams(1)
logParams()

function defautParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defautParams(7, 8, 9)
defautParams(7, 8)
defautParams(7)
defautParams()

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// spread/rest
function logNums(...nums) {
    console.log(nums)
}

logNums(1 , 2 , 3, 4, 5, 6)

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))