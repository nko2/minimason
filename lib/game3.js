Platform = require('platform')(1024, 768);
Platform.setIcon("res/icon.png");
Platform.setTitle("Work in Progress, Check back later...");
gl = Platform.gl;

gl.viewportWidth = 1024;
gl.viewportHeight = 768;


// type is either "FRAGMENT" or "VERTEX"
function compileShader(type, src) {
  var shader = gl.createShader(gl[type + "_SHADER"]);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

// Build our program
var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, compileShader("VERTEX", 
  "attribute vec3 aVertexPosition;\n" +
  "uniform mat4 uPMatrix;\n" +
  "void main(void) { gl_Position = uPMatrix * vec4(aVertexPosition, 1.0); }"
));
gl.attachShader(shaderProgram, compileShader("FRAGMENT", 
  "#ifdef GL_ES\n" +
  "precision highp float;\n" +
  "#endif\n" +
  "void main(void) { gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); }"
));
gl.linkProgram(shaderProgram);
if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
  throw new Error("Could not initialise shaders");
}
gl.useProgram(shaderProgram);
vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
gl.enableVertexAttribArray(vertexPositionAttribute);
// Make the projection match the pixels on the canvas
gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "uPMatrix"), false, new Float32Array([
  2 / gl.viewportWidth, 0, 0, 0,
  0, -2 / gl.viewportHeight, 0, 0,
  0, 0, -1, 0,
  0, 0, 0, 1
]));



// Set up some generic settings
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.disable(gl.DEPTH_TEST);
gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);

var s = 0;
setInterval(function () {
  gl.clear(gl.COLOR_BUFFER_BIT);
  s = (s + 1) % 10;
  for (var i = s, m = Math.max(gl.viewportWidth, gl.viewportHeight) / 2; i < m; i+= 10) {
    drawRect(-i, -i, i * 2, 2);
    drawRect(-i, -i, 2, i * 2);
    drawRect(-i, i - 2, i * 2, 2);
    drawRect(i - 2, -i, 2, i * 2);
  }
  Platform.flip();
}, 16);

////////////////////////////////////////////////////////////////////////////////
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

function drawRect(x, y, w, h) {
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    x + w,  y + h,
    x,      y + h,
    x + w,  y,
    x,      y
  ]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}


