const arr = [1,2,3,4,5]

const foreachArr = arr.forEach( (a,b,c) => {
    return a *2 
    //console.log(`a : ${a}, b : ${b}, c : ${c}`)
})

console.log(arr)
const mapArr = arr.map( (a,b,c) => {
    return a *2 
    //console.log(`a : ${a}, b : ${b}, c : ${c}`)
})
console.log(arr)

console.log(`foreach : ${foreachArr} map : ${mapArr}`)

console.log(arr)

// let map = new Map()

// map.set(7, "seven")
// map.set(9, "eight")
// map.set(8, "nine")


// map.forEach( (a,b,c) => {
//     console.log(`a : ${a}, b : ${b}, c : ${c}`)
// })