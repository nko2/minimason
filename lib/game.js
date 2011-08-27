require('engine')(function (engine) {
  Engine = engine;
  var SpriteMap = require('sprites');
  engine.loadImage("sprites.png", function (err, img) {
    if (err) throw err;
    var dest = {x:100, y:100, a:0, w: 48, h:48};
    var src = SpriteMap.ship[key % SpriteMap.ship.length];
    engine.blitImage(img, src, dest)
  });
  
  console.dir(engine);
});
