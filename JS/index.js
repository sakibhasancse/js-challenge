
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
// regexVar()

function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
    } catch (err) {
        console.log("s.split is not a function.");
        console.log(s)
    }

}
reverseString("23243")
// reverseString(Number(1234))

// Throw
function isPositive(a) {
    if (Math.sign(a) === -1) throw Error("Negative Error");
    else if (a === 0) throw Error("Zero Error");
    else throw Error("YES")

}
function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}
// console.log(isPositive(2))


// Class Inheritances 

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    return
}