const express = require("express")
const path = require('path')
const moment = require('moment')

let app = express()

app.set('view engine', 'pug')

app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/sendFile', (req,res)=>{
    res.sendFile(path.join(__dirname+'/express/index.html'))
})

app.get('/render', (req,res)=>{
    res.render('myview', { title : "mytitle" , message : "res.render(<pug file>, data)" , time: moment().format('MMMM Do YYYY, h:mm:ss a')})
})

app.listen(3000, ()=>{
    console.log('App listening at http://localhost:3000')
})