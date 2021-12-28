
// 1
function add7(number) {
    return number+7
}

// 2
function multiply (a,b) {
    return a * b
}

let tutorial = "THis tuToriAl is GoOd"

// 3
function capitalize(string) {
    let finalString = string.slice(0,1) + string.slice(1, string.length).toLowerCase()
    console.log(finalString)
}

capitalize(tutorial)

// 4
function lastLetter(string) {
    console.log(string.charAt(string.length-1))
}

lastLetter(tutorial)

