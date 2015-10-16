/**
 * Created by david-maser on 16/10/15.
 */
requirejs.config({
    "baseUrl": "assets/js/lib",
    "paths": {
        "app": ""
    },
    "shim": {
        "jquery": ["jquery-2.1.4.min"]
    }
});
// Load the main app module to start the app
requirejs(["../compile"]);