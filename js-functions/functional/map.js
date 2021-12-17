const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map( el => el * 2)

console.log(numbers, numbersV2)

const students = [
    { name: 'Jake'  , score: 6.4 },
    { name: 'Suzan' , score: 8.6 },
    { name: 'Emma'  , score: 9.4 },
    { name: 'Petter', score: 9.1 },
]

const getScore = el => el.score

const result = students
    .map(getScore)
    .map(Math.ceil)

console.log(students, result)

const nomes = students.map(n => n.name)

console.log(nomes)