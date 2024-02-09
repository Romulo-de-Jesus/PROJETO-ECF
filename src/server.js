const express = require("express")
const app = express()
const port = 3000
const path= require("path")
const mysql = require("mysql2")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

const bd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "c@tolic@",
    database: "escola"
})

bd.connect((err) => {
    if (err) {
        console.log("Erro na conexão com mysql")
    } else{
        console.log("conexão estabelecia com mySQL")
    }
    
})

app.post("/criar", (req, res) => {
    const nome = req.body.nome_m
    const cpf = req.body.cpf_m
    const dn = req.body.dn_m
    const email = req.body.email_m
    const telefone = req.body.telefone_m
    console.log(nome)
    console.log(cpf)
    console.log(dn)
    console.log(email)
    console.log(telefone)

    bd.query("INSERT INTO")

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

app.listen(port, () => {
    console.log("O servidor está no ar!")
})

