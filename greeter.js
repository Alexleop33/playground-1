// import { name } from './example.js'


// make a immutable variable
const a = 1

// variables can have types
const s = 'hello' // string (bunch of letters)
const n = 123 // number (sometimes called int or float/double)
const b = true // boolean – true/false (can be on/off)

// variables can come in lists/collections/sets (1-to-many values)
const names = [
    'Dave', 
    'Alex',
    'Bob'
]
const age = [
    38,
    19,
    40
]

// arrays can be accessed numerically (0-based)
const dave = names[0]
const alex = names[1]



// multiple arrays are dumb tho
// objects let you relate multiple pieces of information 

const people = [
    {
        name: 'Dave',
        age: 38
    },
    {
        name: 'Alex',
        age: 19,
        friends: [
            'Dave'
        ]
    },
    {
        name: 'Bob',
        age: 40
    },
    
]

const alexAsAPerson = people[0]
console.log(`
    You are not a simple array ${alexAsAPerson.name} 
    because you are ${alexAsAPerson.age} and 
    are friends with ${alexAsAPerson.friends?.length}
`)


// make your own little program inside this program
function beMeanToName(name, age){
    let result
    if( age >= 18 ){
        result = name + ' you big dummy'
    }else {
        result = name + ' you big special guy'
    }
    
    return result
}
console.log(beMeanToName(names[0], age[0]))
console.log(beMeanToName(names[1], age[1]))

// don't hardcode name. let them tell us at runtime
let name = process.argv[2]


console.log(`Hello ${beMeanToName(name)}!`)