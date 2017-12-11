const assert = require ('chai').assert;
const editQuery = require ('../rpgplus/src');


  it('cadastroNome', function(){
    assert.typeOf(nameEdit,'string')
  });

  it('cadastroEmail', function(){
    assert.typeOf(emailEdit,'string')
  });

  it('cadastroSenha', function(){
    assert.typeOf(passwordEdit,'string')
  });
