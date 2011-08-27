module.exports = function (platform) {
  var gl = platform.gl;

  function Sprite(texture, frames) { 
    this.texture = texture;
    this.frames = frames
  }
  Sprite.prototype.draw = function() { 
    console.log('asdfsadfsadfsd'); 
    throw new Error("Sprite.draw() not yet implemented "); 
  }

  return {
    loadSpriteMap: loadSpriteMap,
  }

  // loadSpriteMap generates a sprite-factory makeSprite(name) that 
  // generates a new Sprite of the named type as specified by spriteSpec.
  // See lib/sprites/ship.js for an example sprite-spec.
  function loadSpriteMap(spriteSpec, callback) {
   	platform.loadTexture(spriteSpec.image, function(err, texture) {
      // There was a problem loading the texture, so of course there was a problem
      // generating the sprite-factory.
   	  if (err) { return callback(err); }

      var sprites = spriteSpec.sprites;
      callback(null, function makeSprite(name) {
       	if (!sprites[name]) { throw new Error("no sprite named: " + name); }
        return new Sprite(texture, sprites);
      });
    });
  }
};

