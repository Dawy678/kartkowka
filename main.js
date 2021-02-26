const arr = new Array(1, 15, 150, 1500, "Jan", 5525, "Henryk")

// Zad 1

console.log(arr)


// Zad 2

const wiecejniz1 =
    arr.every(item => {
    if(item > 1) {
        return true
    }
 })
console.log(wiecejniz1)


// Zad 3

let indexJan = arr 
indexJan.forEach((item, index) => {
    if (item === "Jan") {
        indexJan = index
    }
})
console.log(indexJan)


// Zad na 6

console.log(arr[0], arr[1], arr[2], arr[3], arr[5])
console.log(arr[4], arr[6])