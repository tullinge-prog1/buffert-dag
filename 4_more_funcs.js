
// minutesToSeconds
function minutesToSeconds(minutes) {
    return minutes * 60
}

// hoursToSeconds
function hoursToSeconds(hours){
    return hours * minutesToSeconds(60)
}

// daysToSeconds
function daysToSeconds(days) {
    return hoursToSeconds(days * 24)
}

// weeksToSeconds
function weeksToSeconds(weeks) {
    return weeks * daysToSeconds(7)
}

function volumeOfCylinder(h, r) {
    const area = Math.PI * r * r
    return area * h
}

console.log(volumeOfCylinder(15, 7))
