const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

// Exporta função capaz de receber parâmetro da custom-express
module.exports = (app) => {
  // Primeiro parâmetro: rota que quero atender; Segundo parâmetro: função que será executa
  app.get('/', function (req, resp) {
    resp.send(`
  <html>
      <head>
         <meta charset="utf-8">
      </head>
      <body>
          <h1> Casa do Código </h1>
      </body>
  </html>
  `);
  });

  app.get('/livros', function (req, resp) {

    const livroDao = new LivroDao(db);
    livroDao.lista(function (erro, resultados) {
      resp.marko(
        require('../views/livros/lista/lista.marko'), {
          livros: resultados
        }
      );
    });
  });
}