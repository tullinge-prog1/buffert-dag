
const einarAge = 33
const ebbaAge = 17
const johanAge = 17
const hampusAge = 17
const flynnAge = 17

// return används bara i funktioner. If-else, for, while, är inte funktioner

// einarAge > ebbaAge är ett villkor (condition på engelska)

if (1 + 1 === 2) {
    console.log("det här kommer alltid att skrivas ut")
}

if (einarAge > ebbaAge) {
    console.log("Einar är äldre än Ebba")
} else {
    console.log("Einar är inte äldre")
}

if (johanAge === 17) {
    console.log("Johan är 17")
} else {
    console.log("Johan är inte 17")
}

if (hampusAge === flynnAge) {
    console.log("Hampus och Flynn är lika gamla")
} else {
    console.log("Hampus och Flynn är inte lika gamla")
}

if (ebbaAge === flynnAge) {
    console.log("Ebba är lika gammal som Flynn")
} else {
    console.log("Ebba är inte lika gammal som Flynn")
}

// Man kan kombinera boolean expressions med logiska operatorer
// && betyder OCH
// || betyder ELLER
if (ebbaAge > flynnAge && ebbaAge > johanAge) {
    console.log("ebba är äldre än både flynn och johan")
}
