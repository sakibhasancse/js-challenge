// Preactis Problem solving
// 1 . write a javascript Program to get the extention of a file name

const getExtension = newFunction()

console.log(getExtension('index.js'))
console.log(getExtension('book.json'))


function newFunction() {
    return (str) => (
        str.slice(str.lastIndexOf('.') + 1)

    )
}

// 2 . write a javascript Program to check two number and 
// return true if the number is 100 or if the  sum of number is 100 


function getTrueNumber(a, b) {
    return (

        a === 100 || b === 100 || (a + b) == 100

    )
}


console.log(getTrueNumber(100, 0))
console.log(getTrueNumber(0, 100))
console.log(getTrueNumber(50, 50))


// 3 . write a javascript Program to Replace
//   Every Character in a Given String with the character following 
// in the alphabet



function replaseCharacters(str) {

    return (
        str
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
    )


}

console.log(replaseCharacters('asdas'))

// 4 . write a javascript Program to get current Date exprected result is  mm-dd-yyyy , mm/dd/yyyy ,or dd-mm-yyyy , dd/mm/yyyy

// ans 1
// function getDateExp() {
//     return new Date().toLocaleDateString()
// }

// 2
function getDateExp(date = new Date()) {
    const month = date.getMonth() + 2
    const year = date.getFullYear()
    const Date = date.getDate()

    return `${month}/${Date}/${year}`
}

console.log(getDateExp())

// 5 . write a javascript Program to create a new String adding  "New "  in front of the given string , 
// if already have "New" in front return Only orginal String

function addNewString(str) {
    return str.indexOf("New") === 0 ? str : `New ${str}`
}

console.log(addNewString('New Books'))

// 6 . write a javascript Program to create a new string  from a given string tolk to the first 3 
// chareacters and last 3 characters of the string and adding them together.The String Must be
// 3 chacters or more if not the orginal String is return


function firstCharacterAndLast(str) {
    var char = str.length < 3 ? str : str.slice(0, 3) + str.slice(-3)

    return char
}
console.log(firstCharacterAndLast('1234567890'))
console.log(firstCharacterAndLast('ab'))


// 7 . write a javascript Program to extract of first half of a string of event length

function getHalfEvent(str) {


    return str.slice(0, str.length / 2)
}

console.log(getHalfEvent('sakibhasan'))
console.log(getHalfEvent('sakib'))

// 8 . write a javascript Program to concatenate two strings except their first character

function getConcatenate(first, second) {
    return first.slice(1) + second.slice(1)
}
console.log(getConcatenate('1book', '2book'))

// 9 .Given two values , write a javascript Program to find out is whice one is nearest 100

function getNearRest(first, second) {
    return (100 - first) < (100 - second) ? `Nearest is : ${first}` : `Nearest is : ${second}`
}
console.log(getNearRest(54, 46))

// 10 .Wrire a javascript program to find the number of  event digits in a an array of integers

function FindNumberOfEvent(arr) {
    return (
        arr.filter((num) => num % 2 === 0).length

    )

}

console.log(FindNumberOfEvent([23, 32423, 4234, 234234, 234, 23423,]))
console.log(FindNumberOfEvent([23, 4, 42, 2, 4, 6, 4]))
console.log(FindNumberOfEvent([1, 2, 45, 6, 7, 7]))

// 11 .Wrire a javascript program to find the number of  event values up to a given number

function FindNumberOfEvenNumber(arr) {
    return arr.filter(number => number % 2 === 0).length
}

function createArrayOfNumber(num) {
    var returnArray = [];
    for (var i = 1; i <= num; i++) {
        returnArray.push(i)
    }
    return returnArray

}
console.log(FindNumberOfEvenNumber(createArrayOfNumber(10)))
console.log(FindNumberOfEvenNumber(createArrayOfNumber(3)))
console.log(FindNumberOfEvenNumber(createArrayOfNumber(12)))
console.log(FindNumberOfEvenNumber(createArrayOfNumber(12)))


// 12 .Wrire a javascript program to check  weather a given array of integers is sorted in ascending order
console.log('ans 12')

function isAssanding(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) return false
    }
    return true
}
console.log(isAssanding([1, 2, 3, 4, 5, 6, 7]))
console.log(isAssanding([1, 2, 3, 4, 5, 6, 7, 3, 4]))
console.log(isAssanding([1, 2, 3, 4, 5, 6, 7, 3, 234, 2]))


// 13 .Wrire a javascript program to get largest even number from an array of integers


function maxEvenNumber(arr) {

    return Math.max(...arr.filter(number => number % 2 === 0));
}

console.log(maxEvenNumber([1, 2, 3, 4, 5, 6, 8]))


// 14 .Wrire a javascript program to Replase the first digit in a string (should contains at least digit) with $ character

function ReplaseFirstDigit(str) {
    return str.replace(/[0-9]/, '$')
}

console.log(ReplaseFirstDigit('sadasdasda23'))
console.log(ReplaseFirstDigit('1sadasdasda23'))
console.log(ReplaseFirstDigit('sa4dasdasda23'))

// 15 .Wrire a javascript program to two objects to determine if the first one containes the same  
// Properties as the second one(whice may also have additionals properties )


const obje1 = { a: 1, b: 2, c: 3, d: 4 }
const obje2 = { a: 3, v: 5, c: 3, d: 5 }
const obje3 = { a: 1, b: 2, c: 3, g: 4 }


function objectsEqual(a, b) {
    console.log(Object.keys(a))
    console.log(Object.keys(b))
    console.log(Object.keys(a).every(key => b[key]))


}

objectsEqual(obje1, obje2)


// 15 .Wrire a javascript program to convert a csv comma-separated values (CSV) string to a 2D
// array .A new Line indicates a new row in the array

function parseCSV(csv) {
    console.log(csv.split('\n').map(row => row.split(',')))
}

var csvfile = `adaa,asda,dasd
asds,adas,asdas
asda,adas,asdsa`
parseCSV(csvfile)


// 15 .Wrire a javascript program to generate a random haxadaecimal color code .


function randomColor() {
    var color = Math.floor(Math.random() * 16)
    console.log(color)
}

randomColor()
randomColor()
randomColor()
randomColor()
randomColor()