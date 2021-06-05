
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
vowelsAndConsonants(s)