
(function(require) {

  var requirePaths = {
    paths: {
      
      jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min",
      underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min",
      
      backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.1.0/backbone-min",
      
      hogan: "//cdnjs.cloudflare.com/ajax/libs/hogan.js/2.0.0/hogan"

      //bootstrap: "/js/lib/bootstrap"
    }
  };
      

  if(connectAssets) {
    // Fix up the lib references
    for(var key in connectAssets) {
      if(!connectAssets.hasOwnProperty(key)) {
        continue;
      }

      if(key.slice(0, 4) === "lib/") {
        key = key.slice(4);
      }

      requirePaths.paths[key] = connectAssets[key];
    }
  }
    

  require.config({
    paths: requirePaths.paths,

    shim: {
      jquery: {
        exports: "$"
      },
      hogan: {
        exports: "Hogan"
      },
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
    }
  });
      
  require(['app'], function(App) {
    //new App().initialize()
    console.log("LOADED IT!");
  });

}(window.require));