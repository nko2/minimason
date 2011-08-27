var Http = require('http'),
    Stack = require('stack'),
    Creationix = require('creationix'),
    NKO = require('nko')('bfe7zkjqiHwktcAd');

var PORT = process.env.PORT || 8080;
var server = Http.createServer(Stack(
  Creationix.log(),
  Creationix.autoloader("/game/scripts.js", __dirname + "/lib", false),
  Creationix.static("/", __dirname + "/www", "index.html"),
  Creationix.indexer("/", __dirname + "/www")
)).listen(PORT);
console.log("Server Minimason listening on http://localhost:" + PORT + "/");

if (process.getuid() === 0) {
  require('fs').stat(__filename, function(err, stats) {
    if (err) return console.log(err)
    console.log("Dropping uid to " + stats.uid);
    process.setuid(stats.uid);
  });
}
