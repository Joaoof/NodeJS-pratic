const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
//  Config
    //  Template Engine

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// ? Bordy Parser

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// ! Rotas

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(post){ //  esse parâmentro da função pode ser qualquer nome.
        res.render('home', {posts: post})
    })
})

app.get('/cad', function(req, res){
      res.render('formulario')
})

app.post('/send', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
    })

})

app.get('/delete/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Mensagem apagada com sucesso!")
    }).catch(function(erro){
        res.send("Operação não concluída")
    })
})

app.listen(8081, function(req, res){
    console.log("Servidor Rodando na url http://localhost:8081")
})