// Preactis Problem solving
// 1 . write a javascript Program to get the extention of a file name

const getExtension = (str) => (
    str.slice(str.lastIndexOf('.') + 1)

)

console.log(getExtension('index.js'))
console.log(getExtension('book.json'))


// 1 . write a javascript Program to check two number and 
// return true if the number is 100 or if the  sum of number is 100 


const getTrueNumber = (a, b) => (

    a === 100 || b === 100 || (a + b) == 100

)


console.log(getTrueNumber(100, 0))
console.log(getTrueNumber(0, 100))
console.log(getTrueNumber(50, 50))