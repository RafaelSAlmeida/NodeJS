/*Importar o módulo do framework express*/
var express = require('express');

/*Importar o módulo do consign*/
var consign = require('consign');

/*Importar o módulo do body-parser*/
var bodyParser = require('body-parser');

/*Importar o módulo do express-validator*/
var expressValidator = require('express-validator');

/*Iniciar o objeto do express*/
var app = express();

/*Setar as variáveis que a view engine e views do express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*Configuração dos middlewares*/
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/*Efetua o autoload das rotas, models e dos controllers para o objeto app*/
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/*Exportar o objeto app*/
module.exports = app;