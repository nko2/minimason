module.exports = function (callback) {
  callback({
    type: "browserDom",
    loadImage: loadImage
  });
};

function loadImage(path, callback) {
  var img = new Image;
  img.onload = function () {
    callback(null, img);
  };
  img.onerror = function (err) {
    callback(new Error("Cannot load image " + JSON.stringify(path)));
  }
  img.src = path;
}
