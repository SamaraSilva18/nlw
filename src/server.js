//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configuração do Nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

//Inicialização e Configuração do Servidor
server
//Receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//Configuração de arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do Servidor
.listen(5500)
