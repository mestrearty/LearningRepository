const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req,resp)=>{
    console.log(req.body)
    resp.send('<h1>Usuário Incluido<h1>')
})


app.post('/usuarios/:id',(req,resp)=>{
    console.log("ID", req.params.id)
    console.log(req.body)
    resp.send(`<h1>Usuário de ID: ${req.params.id} alterado<h1>`)
})

app.listen(3003)