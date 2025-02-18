const express = require('express')
const app = express()
app.listen(3000)

app.get('/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    console.log(db.get(id))

    if (db.get(id) == undefined ){
        res.json({
            message : "not defined"
        })
    } else{
        res.json(db.get(id))
    }
    
        
})
 
let Notebook = {
    productName : "Notebook",
    price : 200000
}

let cup = {
    productName : "Cup",
    price : 3000
}

let rip = {
    productName : "Rip",
    price : 10000
}


let db = new Map();
db.set(1, Notebook)
db.set(2, cup)
db.set(3, rip)


