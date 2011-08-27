function Sprite(engine, texture, frames) {
  console.log("INSTANTIATED SPRITE");
  this.spriteContext = engine.spriteContext;
  this.texture = texture;
  this.frames = frames;

};
module.exports = Sprite;

Sprite.prototype.draw = function() { 
  this.spriteContext.drawSprite([100, 100], 0, [128,128], [0,0], [128,128], this.texture);
}


