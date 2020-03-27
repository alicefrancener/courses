const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");

conexao.connect(erro => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com sucesso");

    const app = customExpress();
    const port = 3000;

    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  }
});
