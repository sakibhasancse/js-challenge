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

// 10 .Given two values , write a javascript Program to find out is whice one is nearest 100
