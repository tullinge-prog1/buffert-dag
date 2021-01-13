
function f() { 
    
}

function add(x, y) {
    return x + y 
}

function dubbleAge (age){
    return age * 2
}

function celciusToKelvin(x) {
    return x + 273.15 + " K"
}

function subtract (x, y) {
    return x - y
}
// 

function areaOfTriangle(b , h) {
    return b * h / 2
}


function transferMoney(fromUser, toUser, howMuch) {
    const x = 5 // lokal variabel, den syns inte utanför funktionen

}

transferMoney("Ilona", "Einar", 500)
transferMoney("Hampus", "Einar", 1500) // Vi anropar funktionen med argumenten "Hampus", "Einar" och 1500

// Funktioner
// 1. Definiera en funktion --------- > beskriv vad den ska heta, vad den ska göra NÄR den anropas
// 2. Anropa en funktion  -------------> faktiskt köra funktionen, eventuellt med lite data som input (argument)

function multiply(a, b) {
    console.log("Nu körs funktionen multiply")
    console.log("a är " + a)
    console.log("b är " + b)
    return a * b
}

const result = multiply(5, 5)
console.log(result)
