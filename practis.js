
/*
    * Write a js function that return a string with letters with alphabatical order like: -
    * Example String : 'bcad'
    * Output String : 'abcd'
 */

function AlphaString(str) {
    return str.split('').sort((a, b) => a > b ? 1 : -1).join('');

}
// console.log(AlphaString('sdsadca'))
// console.log(AlphaString('dsfsamaa'))



/*
    * Write a js function that accepts a string as a parameter and counts the number of vowels withein the string

 */


function CountVowels(str, letters = ['a', 's', 'b', 'f', 'e']) {
    return str.split('').filter((e) => letters.indexOf(e) > -1).length
}
// console.log(CountVowels('abcd', ['s', 'a']))
// console.log(CountVowels('abcd', ['f', 'd', 'asdas']))
// console.log(CountVowels('abcd'))





/*
    * Write a js function that get unique characters from a string and alphabatical order list
 */


// function UniqueChar(str) {
//     return str.split('')
//         .filter((value, index, array) =>
//             array.slice(index + 1)
//                 .indexOf(value) === -1)
//         .sort((a, b) => a > b ? 1 : -1)
// }





// function UniqueChar(str) {
//     return str.split('')
//         .filter((value, index, array) => array.slice(index + 1).indexOf(value) === -1).sort((a, b) => a > b ? 1 : -1)
// }


function UniqueChar(str) {
    return [...new Set(str.split(''))]
}
// console.log(UniqueChar('sdadsadadsadmka'))



/*
    * Write a js function that return first character and non repitedCharacters
 */


function noRepited(str) {
    return str.split('').filter((value, index, array) => array.filter(item => item === value).length === 1)
}

// console.log(noRepited('abbccddeaasdd'))


function newFunction(str) {
    return String.fromCharCode(str)
}


console.log(newFunction(33))
console.log(newFunction(23))
console.log(newFunction(345))
console.log(newFunction(435))