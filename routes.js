const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Middlewares serve para fazer alguma ação entre a resposta do cliente
/* function meuMiddleware(req, res, next){
    //serve para guardar informaçoes que vc precisa passar pelas paginas
    req.session = {nome: 'Luiz', sobrenome: 'Otavio'};
    console.log('')
    console.log('passei no middleware!')
    console.log('')
    next();
}
// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
    console.log('')
    console.log(`'ultimo middleware' olha oque tem no nosso session ${req.session.sobrenome}`);
    console.log('')
}); */
// Rotas da home
route.get('/', homeController.paginaInicial); 

route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;