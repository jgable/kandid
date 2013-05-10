
var candidateRoutes = require("./api/candidates");

var router = {
	register: function(app) {
		// Helpers
		var makeLayoutData = function() {
			console.log(global);
			return {
				css: {
					app: global.css("app")
				},
				js: {
					main: global.jsUrl("/js/main.js"),
					templates: "<!-- Templates Go Here -->",
					paths: global.exportPaths(),
					appSettings: "<!-- App Settings Go Here -->"
				}
			};
		}

		// API Routes
		candidateRoutes.register(app);

		// Regular Routes
		app.get("/", function(req, resp) {
			var layoutData = makeLayoutData();
			
			resp.render("index", layoutData);
		});
	}
};

module.exports = router;