Platform = require('platform')(640, 480);

Platform.setIcon("res/icon.png");
Platform.setTitle("Work in Progress, Check back later...");

Engine = require('engine')(Platform);

require('glMatrix');






function initGL() {

  gl = Platform.gl;

  Object.keys(gl).forEach(function (name) {
    if (typeof gl[name] !== 'function') return;
    if (name === "getError") return;
    var original = gl[name];
    gl[name] = function () {
      console.log("gl." + name + "(", arguments, ")");
      var result = original.apply(this, arguments);
      var err = gl.getError();
      if (err) {
        var message;
        switch (err) {
        case gl.INVALID_ENUM: message = "INVALID_ENUM"; break;
        case gl.INVALID_VALUE: message = "INVALID_VALUE"; break;
        case gl.INVALID_OPERATION: message = "INVALID_OPERATION"; break;
        case gl.STACK_OVERFLOW: message = "STACK_OVERFLOW"; break;
        case gl.STACK_UNDERFLOW: message = "STACK_UNDERFLOW"; break;
        case gl.OUT_OF_MEMORY: message = "OUT_OF_MEMORY"; break;
        case gl.TABLE_TOO_LARGE: message = "TABLE_TOO_LARGE"; break;
        default: message = "Unknown Error " + err; break;
        }
        throw new Error("Problem after executing gl." + name + ": " + message);
      }
      console.log("gl." + name + "(...) -> ", result);
      return result;
    }
  });

  gl.viewportWidth = Platform.width;
  gl.viewportHeight = Platform.height;
}

var shaderScripts = {
  "shader-fs":
    "#ifdef GL_ES\n" +
    "precision highp float;\n" +
    "#endif\n\n" +
    "varying vec4 vColor;\n\n" +
    "void main(void) {\n" +
    "  gl_FragColor = vColor;\n" +
    "}\n",
  "shader-vs":
    "attribute vec3 aVertexPosition;\n" +
    "attribute vec4 aVertexColor;\n\n" +
    "uniform mat4 uMVMatrix;\n" +
    "uniform mat4 uPMatrix;\n\n" +
    "varying vec4 vColor;\n\n" +
    "void main(void) {\n" +
    "  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n" +
    "  vColor = aVertexColor;\n" +
    "}\n"
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


var shaderProgram;

function initShaders() {
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error("Could not initialise shaders");
  }

  gl.useProgram(shaderProgram);


  vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  gl.enableVertexAttribArray(vertexPositionAttribute);

  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);

  pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");

}


var mvMatrix = mat4.create();
var pMatrix = mat4.create();

function setMatrixUniforms() {
  gl.uniformMatrix4fv(pMatrixUniform, false, pMatrix);
  gl.uniformMatrix4fv(mvMatrixUniform, false, mvMatrix);
}



var triangleVertexPositionBuffer;
var squareVertexPositionBuffer;

function initBuffers() {
  triangleVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
  var vertices = [
     0.0,  1.0,  0.0,
    -1.0, -1.0,  0.0,
     1.0, -1.0,  0.0
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


  triangleVertexColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
  var colors = [
      0.0, 0.1, 1.0, 1.0,
      0.0, 1.0, 0.0, 1.0,
      1.0, 0.1, 0.0, 1.0
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);


  squareVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
  vertices = [
     1.0,  1.0,  0.0,
    -1.0,  1.0,  0.0,
     1.0, -1.0,  0.0,
    -1.0, -1.0,  0.0
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  squareVertexColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
  colors = []
  for (var i=0; i < 4; i++) {
      colors = colors.concat([i / 3, (1 - i / 3), i % 2, 1.0]);
  }
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

}

var trans = 0;
function drawScene() {
  gl.useProgram(shaderProgram);

  vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  gl.enableVertexAttribArray(vertexPositionAttribute);

  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);



  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

  mat4.identity(mvMatrix);

  var myTrans = Math.sin(trans);
  trans += 0.01;
  if (trans > 2*Math.PI) trans = 0;

  mat4.translate(mvMatrix, [-1.5 + myTrans, 0.0, -7.0]);
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);

  setMatrixUniforms();
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  mat4.translate(mvMatrix, [3.0, 0.0, 0.0]);
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);

  setMatrixUniforms();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);  

  Platform.flip();
}

var sprite1, sprite2, sprite3;
Engine.loadSpriteMap(require('sprites/ship'), function(error, map) {
  if (error) return console.log("failed to generate sprite-map");
  sprite1 = map('ship');
  sprite2 = map('ship');
  sprite3 = map('ship');
});

function drawSprite() {
  if (sprite1) {
    try {
       sprite1.draw();
    }
    catch(e) {
      console.log("ERROR DRAWING SPRITE: " + e);
      sprite1 = null;
      throw e;
    }
  }
}


function webGLStart() {
  initGL();
  initShaders();
  initBuffers();

  gl.clearColor(0.0, 0.3, 0.0, 1.0);
  gl.disable(gl.DEPTH_TEST);

  animate();
}
requestAnimationFrame = window.requestAnimationFrame || function(callback) { setTimeout(callback, 10); }
webGLStart();

function animate() {
  requestAnimationFrame(animate);
  drawScene();
  drawSprite();

  gl.flush();
  var err = gl.getError();
  if (err) {
    console.log("GOT GL ERROR: " + err);
  }
}


