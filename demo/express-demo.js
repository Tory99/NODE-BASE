const express = require('express')
const app = express()
app.listen(3000)

const game = [
  { id : 1, name : "lol"},
  { id : 2, name : "PUBG"},
  { id : 3, name : "overwatch"},
  { id : 4, name : "maplestory"},
]

app.get('/Search', (req, res) => {
  res.json(game)
})

app.get('/Search/:id', (req,res) => {
  let {id} = req.params
  id = parseInt(id)
  var findgame = game.find( f => f.id == id )

  if(findgame){
    // game.forEach((id) => {
    //   if(game.id == id){
    //     res.json(game)
    //   }
    res.json(findgame)

  } else {
    res.status(404).send("404, not find")
  }
})

app.get('/', function (req, res) {
  res.send('main')
})

app.post('/test', function (req, res) {
  res.send('Hello Post')
})


