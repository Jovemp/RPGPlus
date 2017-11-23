var uDAO = new UsuarioDAO();

function cadastroController() {
  this.saveUsuario = function (nome, cpf, callback) {
    var usuario = new Usuario(nome, cpf);
    return uDAO.save(usuario, callback);
  };
}
