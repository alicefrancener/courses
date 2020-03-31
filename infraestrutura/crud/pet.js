const executaQuery = require("../database/queries");

class Pet {
  lista() {
    const sql =
      "SELECT Pets.id, Pets.nome, Pets.tipo, Pets.observacoes, Clientes.id as donoId, Clientes.nome as donoNome, Clientes.cpf as donoCpf FROM Pets INNER JOIN Clientes WHERE Pets.donoId = Clientes.id";

    return executaQuery(sql).then(resposta =>
      resposta.map(pet => ({
        id: pet.id,
        nome: pet.nome,
        tipo: pet.tipo,
        observacoes: pet.observacoes,
        dono: {
          id: pet.donoId,
          nome: pet.donoNome,
          cpf: pet.donoCpf
        }
      }))
    );
  }

  buscaPorId(id) {
    const sql = `SELECT Pets.id, Pets.nome, Pets.tipo, Pets.observacoes, Clientes.id as donoId, Clientes.nome as donoNome, Clientes.cpf as donoCpf FROM Pets INNER JOIN Clientes WHERE Pets.id=${parseInt(
      id
    )} AND Clientes.id = Pets.donoId`;

    return executaQuery(sql).then(resposta => ({
      id: resposta[0].id,
      nome: resposta[0].nome,
      tipo: resposta[0].tipo,
      observacoes: resposta[0].observacoes,
      dono: {
        id: resposta[0].donoId,
        nome: resposta[0].donoNome,
        cpf: resposta[0].donoCpf
      }
    }));
  }

  adiciona(item) {
    const { nome, donoId, tipo, observacoes } = item;

    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}')`;

    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      donoId,
      tipo,
      observacoes
    }));
  }

  atualiza(novoItem) {
    const { id, nome, donoId, tipo, observacoes } = novoItem;

    const sql = `UPDATE Pets SET nome='${nome}', donoId=${donoId}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}; SELECT * FROM Clientes WHERE id = ${donoId}`;

    return executaQuery(sql).then(resposta => {
      const dono = resposta[1][0];
      return {
        ...novoItem,
        dono
      };
    });
  }

  deleta(res, id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`;

    executaQuery(res, sql);
  }
}

module.exports = new Pet();
