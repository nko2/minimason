module.exports = function (platform) {

  var gl = platform.gl;
  require('jsgamebench/webgl_util').extendContext(gl);
  gl.viewport(0, 0, width, height);

  function Sprite(texture, frames) { 
    this.texture = texture;
    this.frames = frames
  }
  Sprite.prototype.draw = function() { 
    throw new Error("Sprite.draw() not yet implemented "); 
  }

  return {
    loadSpriteMap: loadSpriteMap,
    spriteContext: require('jsgamebench/webgl_sprite').createContext(gl)
//  spriteContext: reQuire('jsgamebench/webgl_sprite').createBatchingContext(gl, 500)
  }

  // loadSpriteMap generates a sprite-factory makeSprite(name) that 
  // generates a new Sprite of the named type as specified by spriteSpec.
  // See lib/sprites/ship.js for an example sprite-spec.
  function loadSpriteMap(spriteSpec, callback) {
    var engine = this;
   	platform.loadTexture(spriteSpec.image, function(err, texture) {
      // There was a problem loading the texture, so of course there was a problem
      // generating the sprite-factory.
   	  if (err) { return callback(err); }

      var sprites = spriteSpec.sprites;
      callback(null, function makeSprite(name) {
       	if (!sprites[name]) { throw new Error("no sprite named: " + name); }
        var SpriteClass = require('sprite');
        return new SpriteClass(engine, texture, sprites);
      });
    });
  }

};



  // We might want to use the jsgamebench shader format so that 
  // it can automatically set up parameter bindings for us.
  function createSpriteProgram(gl) {
    var shaderScripts = {
      "shader-fs":
        [
          "#ifdef GL_ES",
          "precision highp float;",
          "#endif\n",
          "void main(void) {",
          "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);",
          "}"
        ].join("\n"),
      "shader-vs":
        [
          "uniform vec3 sprite_pos;",
          "uniform vec3 sprite_sizerot;",
          "uniform vec4 sprite_tex_transform;",
          "uniform vec4 screen_dims;\n",

          "attribute vec2 vposition;",
          "varying vec2 v_Texcoord;\n",

          "void main(void) {",
          "  vec2 pre_rot = vposition * sprite_sizerot.xy;",
          // Can we get sin and cos from one function call?
          "  vec2 tdir = vec2(sin(sprite_sizerot.z), cos(sprite_sizerot.z));",
          "  vec2 dir = vec2(tdir.y, -tdir.x);",
          "  gl_Position.x = dot(dir, pre_rot);",
          "  gl_Position.y = dot(tdir, pre_rot);",
          "  gl_Position.xy = (gl_Position.xy + sprite_pos.xy)",
                              // Uh-oh, I don't understand the line below
          "                   * screen_dims.xy + screen_dims.zw;",
          "  gl_Position.z = sprite_pos.z;",
          "  gl_Position.w = 1.0;",
          "  v_Texcoord = vposition.xy * sprite_tex_transform.xy + sprite_tex_transform.zw;",
          "}"
        ].join("\n")
    }; 

    function getShader(gl, id) {
      if (!shaderScripts.hasOwnProperty(id)) return null;
      var str = shaderScripts[id];

      var shader;
      if (id.match(/-fs/)) {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
      } else if (id.match(/-vs/)) {
        shader = gl.createShader(gl.VERTEX_SHADER);
      } else {
        return null;
      }

      gl.shaderSource(shader, str);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }

      return shader;
    }

    function initProgram() {
      var fragmentShader = getShader(gl, "shader-fs");
      var vertexShader = getShader(gl, "shader-vs");

      shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error("Could not initialise shaders");
      }

//      gl.useProgram(shaderProgram);

  //    vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vposition");
//      gl.enableVertexAttribArray(vertexPositionAttribute);

//      pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
//      mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");

      return shaderProgram;
    }

    return initProgram();
  };



