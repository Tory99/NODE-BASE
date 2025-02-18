const arr = [1,2,3,4,5]

// arr.forEach( (a,b,c) => {
//     console.log(`a : ${a}, b : ${b}, c : ${c}`)
// })

let map = new Map()

map.set(7, "seven")
map.set(9, "eight")
map.set(8, "nine")


map.forEach( (a,b,c) => {
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})