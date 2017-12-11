const assert = require ('chai').assert;
const editQuery = require ('../rpgplus/src/app/controller/editProfilleController');


  it('editarNome', function(){
    assert.typeOf(editName,'string')
  });

  it('editarEmail', function(){
    assert.typeOf(editEmail,'string')
  });

  it('editarSenha', function(){
    assert.typeOf(editSenha,'string')
  });
