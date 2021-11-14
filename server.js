require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
const { middlewareGlobal } = require('../Modelo final/src/middlewares/middleware');

mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Conectado na base de dados')
    app.emit('pronto');
}).catch(e => console.log(e));

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executado na porta 3000');
    });
})
