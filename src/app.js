// Skeleton app


var App = {};

App.Main = function (canvasId, vertexShader, fragShader) {

    var canvas = document.getElementById(canvasId);

    // Setup GL
    try {
        var gl = canvas.getContext("experimental-webgl");

        gl.viewport(0, 0, canvas.width, canvas.height);


        render();


        function render() {
            window.requestAnimationFrame(render);

            // Render here
            gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Set clear color to black, fully opaque
            gl.enable(gl.DEPTH_TEST);                               // Enable depth testing
            gl.depthFunc(gl.LEQUAL);                                // Near things obscure far things
            gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
            
            // RENDER CODE HERE
            console.log("Rendering...");
        }

    } catch (e) {
        console.log("Error on GL setup: " , e);
    }
    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }

}



