// Require the real engine
(function () {
  module.exports = this.versions ?
    require('engines/' + 'nodeSdl') :
    require('engines/browserDom');
}());

