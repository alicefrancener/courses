require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middleware

app.use(bodyParser.urlencoded({
  extended: true //habilitado a receber objetos complexos em formato JSON
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;