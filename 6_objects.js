
// Objekt är en datatyp där man kan kombinera annan data

// Det här objektet har 5 properties
let einar = {
    name: "Einar",          // En property, av typen string
    age: 33,                // En till property, av typen number
    city: "stockholm",
    hobby: "surdegsbröd",
    isAlive: true
}

let hampus = {
    name: "Hampus",
    age: 17,
    city: "stockholm",
    hobby: "Tennis",
    isAlive: true
}

let ebba = {
    name: "Ebba",
    age: 17,
    city: "stockholm",
    hobby: "golf",
    isAlive: true
}

let johan = {
    name: "Johan",
    age: 17,
    city: "stockholm",
    hobby: "fotboll",
    isAlive: true
}

let flynn = {
    name: "Flynn",
    age: 17,
    city: "Gnesta",
    hobby: "läsa",
    isAlive: true 
}

// isSameAge (person1, person2)
// function isSameAge (person1, person2) {
//     if (person1.age === person2.age) {
//         return true
//     } else {
//         return false
//     }
// }

function isSameAge (person1, person2) {
    return person1.age === person2.age
}

console.log(isSameAge(johan, johan))
