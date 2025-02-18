const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('main')
})

app.post('/test', function (req, res) {
  res.send('Hello Post')
})


app.listen(3000)