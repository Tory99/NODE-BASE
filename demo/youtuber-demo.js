// express 모듈 셋팅
const express = require('express')
const app = express()
app.listen(3000)

// 데이터 셋팅팅
let youtuber1 = {
    channelTitle : "Mnet",
    sub : "2만",
    video : "10개"
}
  
let youtuber2 = {
    channelTitle : "Bnet",
    sub : "6만",
    video : "110개"
}

let db = new Map()
db.set(1,youtuber1)
db.set(2,youtuber2)

//Rest API 설계

app.get('/youtuber/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if (youtuber == undefined ){
        res.json({
            message : `${id} is not defined`
        })
    } else{
        res.json(youtuber)
    }
})

app.use(express.json())
app.post('/test/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    if(!id.body){
        return res.json({
            message : `not body.`
        })
    }
    if(db.get(id)){
        res.json({
            message : `해당 ${id}는 이미 입력되어있습니다.`
        })
    } else {
        db.set(id,req.body)
        res.json({
            message : `${db.get(id).channelTitle}님, 화이팅`
        })
    }
})

app.get("/allSearch", (req, res) => {
    if(db.size){
        res.json(Object.fromEntries(db))
    } else { 
        res.json({
        message : `Empty`
    })
    }
})

app.get('/', function (req, res) {
  res.send('main')
})

app.delete('/youtubers/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if(youtuber == undefined ){
        res.json({
            message : `${id} is not defined`
        })
    } else{
        const name = youtuber.channelTitle
        db.delete(id)
        res.json({
            message : `${name} complete delete`
        })
    }

    
})

app.delete("/alldelete", (req, res) => {
    if(db.size){
        db.clear()
        res.json({
            message : `all delete`
        })
    } else { 
        res.json({
        message : `Empty`
    })
    }
    
})

app.put("/youtuber/:id", (req, res) =>{
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if(youtuber == undefined ){
        res.json({
            message : `${id} is not defined`
        })
    } else{
        var newTitle = req.body.channelTitle
        var oldTitle = youtuber.channelTitle
        youtuber.channelTitle = newTitle

        db.set(id,youtuber)
        res.json({
            message : `${newTitle}, complete change, ${oldTitle}`
        })
    }
})