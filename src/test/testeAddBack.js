const assert = require ('chai').assert;
const editQuery = require ('../rpgplus/src/app/public/backgroundAdd');


  it('allignment', function(){
    assert.typeOf(allignment,'string')
  });
  it('age', function(){
    assert.typeOf(age,'string')
  });
  it('profession', function(){
    assert.typeOf(profession,'string')
  });
  it('weight', function(){
    assert.typeOf(weight,'string')
  });
  it('id', function(){
    assert.typeOf(character_id,'string')
  });

