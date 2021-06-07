
//one
function vowelsAndConsonants(s) {
    let vowels = 'aeiou',
        consonents = [];
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i])
        } else {
            consonents.push(s[i])
        }
    }
    for (let i = 0; i < consonents.length; i++) {
        console.log(consonents[i])
    }
}
let s = 'javascriptloops'
// vowelsAndConsonants(s)


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */


    return new RegExp(/^([aeiou]).*\1$/);


    /*
     * Do not remove the return statement
     */
    return re;
}
regexVar()