const LivroDao = require('../infra/LivroDao');
const db = require('../../config/database');

// Exporta função capaz de receber parâmetro da custom-express
module.exports = (app) => {
  // Primeiro parâmetro: rota que quero atender; Segundo parâmetro: função que será executa
  app.get('/', function(req, resp) {
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

  app.get('/livros', function(req, resp) {
    const livroDao = new LivroDao(db);
    livroDao.lista()
      .then(livros => resp.marko(
        require('../views/livros/lista/lista.marko'), {
          livros: livros
        }

      ))
      .catch(erro => console.log(erro));
  });

  app.get('/livros/form', function(req, resp) {
    resp.marko(require('../views/livros/form/form.marko'));
  });

  app.post('/livros', function(req, resp) {
    console.log(req.body);
    const livroDao = new LivroDao(db);
    livroDao.adiciona(req.body)
      .then(resp.redirect('/livros')) //quando terminar de add o livro ao bd, redireciona para listagem de livros
      .catch(erro => console.log(erro));
  });
  
  app.delete('/livros/:id', function(req, resp) {
    const id = req.params.id;
    const livroDao = new LivroDao(db);
    livroDao.remove(id)
    .then(() => resp.status(200).end())
    .catch(erro => console.log(erro));
  });

}