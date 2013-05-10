
var assetsModule = require("connect-assets"),
	jsPathify = require('connect-assets-jspaths');

module.exports = {
	init: function(app, done) {
		app.use(assetsModule({servePath: ''}));

		jsPathify(assetsModule, console.log, function() { }, done);
	}
};