module.exports = function (width, height) {

  document.body.textContent = "";
  var canvas = document.createElement('canvas');
  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  return {
    type: "browserDom",
    loadTexture: loadTexture,
    setTitle: setTitle,
    setIcon: setIcon,
    gl: gl
  }
  
  function loadTexture(path, callback) {
    var img = new Image;
    img.onload = function () {
      // TODO: create gl texture from this image
      callback(null, img);
    };
    img.onerror = function (err) {
      callback(new Error("Cannot load image " + JSON.stringify(path)));
    }
    img.src = path;
  }
  
  function setTitle(title) {
    document.title = title;
  }
  
  function setIcon(path) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = path;
    if (oldLink) {
      document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
  }

};

