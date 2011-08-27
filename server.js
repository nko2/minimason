var Http = require('http'),
    Stack = require('stack'),
    Creationix = require('creationix'),
    NKO = require('nko')('bfe7zkjqiHwktcAd');

var PORT = process.env.PORT || 8080;
var server = Http.createServer(Stack(
  Creationix.log(),
  Creationix.static("/", __dirname + "/www", "index.html")
)).listen(PORT);
console.log("Server Minimason listening on http://localhost:" + PORT + "/");
