const assert = require ('chai').assert;
const editQuery = require ('../rpgplus/src/app/public/charAdd');


  it('personagemNome', function(){
    assert.typeOf(name,'string')
  });

it('personagemRace', function(){
    assert.typeOf(race,'string')
  });

  it('personagemExperience', function(){
    assert.typeOf(experience,'string')
  });

  it('personagemStrength', function(){
    assert.typeOf(strength,'string')
  });

  it('personagemDexterity', function(){
    assert.typeOf(dexterity,'string')
  });

  it('personagemConstituion', function(){
    assert.typeOf(constitution,'string')
  });

  it('personagemInteligence', function(){
    assert.typeOf(inteligence,'string')
  });

  it('personagemWisdom', function(){
    assert.typeOf(wisdom,'string')
  });

  it('personagemCharisma', function(){
    assert.typeOf(charisma,'string')
  });

  it('personagemMovement', function(){
    assert.typeOf(movement,'string')
  });

  it('personagemVidaMaxima', function(){
    assert.typeOf(max_health,'string')
  });

  it('personagemHealth', function(){
    assert.typeOf(health,'string')
  });
  it('personagemCapacidade', function(){
    assert.typeOf(carry_capacity,'string')
  });
  it('personagemID', function(){
    assert.typeOf(user_iduser,'string')
  });
