Platform = require('platform')(1024, 768);
console.log(Platform);
Platform.setIcon("res/icon.png");
Platform.setTitle("Work in Progress, Check back later...");

Engine = require('engine')(Platform);
console.log(Engine);

Engine.loadSpriteMap(require('sprites/ship'), function(err, spriteFactory) {
  if (err) { 
    console.log('could not create sprite-factory: ' + err + ']]]]'); 
    throw err;
  }
  else {
    var sprite = spriteFactory('ship');
    console.log('SPRITE!!!' + sprite);
    sprite.draw();
  }
});
