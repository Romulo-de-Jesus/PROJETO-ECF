const express = require("express")
const app = express()
const port = 3000
const path= require("path")
const mysql = require("mysql2")

const bd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "c"
})

app.use(express.static(path.join(__dirname, 'public')))




app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/css/style.css'))
})

app.get("/gar.png", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/images/gar.png'))
})
app.get("/logo.png", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/assets/logo.png'))
})
app.get("/script", (req,res) =>{
    res.sendFile(path.join(__dirname + "/public/js/script.js"))
})

app.list