const arr1 = [
    ["name", "id", "age", "weight"],
    ["safer", "2", "30", "40"],
    ["sakib", "3", "30", "32"],
    ["joy", "4", "40", "32"],
    ["rakib", "7", "50", "32"],
    ["khan", "9", "70", "32"]
]

const arr2 = [
    ["name", "id", "height  "],
    ["safer", "2", "40"],
    ["sakib", "3", "32"],
    ["joy", "4", "32"],
    ["rakib", "7", "32"],
    ["khan", "9", "32"]
]
const arr3 = [
    ["name", "id", "parent"],
    ["safer", "2", "yes"],
    ["sakib", "3", "yes"],
    ["joy", "4", "yes"],

]

console.table(arr3)

function parseArray(arr) {
    const [headings, ...data] = arr
    console.log({ headings, data })
}

parseArray(arr1)