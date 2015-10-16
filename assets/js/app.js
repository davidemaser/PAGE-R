/**
 * Created by david-maser on 16/10/15.
 */
requirejs.config({
    "baseUrl": "assets/bower_components",
    "paths": {
        "app": ""
    },
    "shim": {
        "jquery": ["jquery/dist/jquery.min"]
    }
});
// Load the main app module to start the app
requirejs(["../js/compile"]);