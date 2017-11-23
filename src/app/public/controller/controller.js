var electron = require('electron')

function realizarCadastro() {
  var nometxt = document.getElementById('InputEmail').value;
  var cpftxt = document.getElementById('InputPassword').value;

  var cadCon = new cadastroController();

  cadCon.saveUsuario(
    nometxt,
    cpftxt,
    function (result) {
      if(result === true) {
        alert('Cadastro realizado com sucesso!');
        location.href = "./index.html";
      } else {
        alert('Erro no cadastro!');
      }
    }
  );
}
