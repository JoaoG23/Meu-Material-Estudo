const express = require('express');
const { send } = require('process');
const app = express();
const porta = 2001;
const mongoose = require('mongoose');
const path = require('path'); // local de pastas 
const LinkRouters = require('./routers/LinkRouters');

//---------Initialize----------------
mongoose.connect('mongodb://localhost/newlinks');
let db = mongoose.connection;

db.on("error", () => { console.log("โ HOUVER UM ERRO") });
db.once("open", () => { console.log(" ๐---- SERVIDOR INICIADO ----๐"); });

app.set('view engine', 'ejs');// iniciando Ejs 
app.set('views', path.join(__dirname,'templates'))// pasta onde estรฃo localizados templates.

app.use("/",LinkRouters);
app.listen(porta, () => { console.log("Servidor Integrado Com MONGO-DB rodando na porta !!", porta); });