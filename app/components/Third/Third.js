import {Component, createProgram, compileShader} from "engine";
import { webGl } from 'engine/EngineWebGl';

import vertexShader2d from "./vertexShader2d.glsl";
import fragmentShader from './fragmentShader.glsl';

const randomInt = range=> {
    return Math.floor(Math.random() * range);
};

const setRectangle = (x, y, width, height)=> {
    const x1 = x;
    const x2 = x + width;
    const y1 = y;
    const y2 = y + height;

    // ПРИМ.: gl.bufferData(gl.ARRAY_BUFFER, ...) воздействует
    // на буфер, который привязан к точке привязке `ARRAY_BUFFER`,
    // но таким образом у нас будет один буфер. Если бы нам понадобилось
    // несколько буферов, нам бы потребовалось привязать их сначала к `ARRAY_BUFFER`.

    webGl.bufferData(webGl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2]), webGl.STATIC_DRAW);
};

export default class Third extends Component{
    constructor(props){
        super(props);

        
        this.shaders = [
            compileShader( webGl.VERTEX_SHADER, vertexShader2d),
            compileShader( webGl.FRAGMENT_SHADER, fragmentShader)
        ];

        this.program = createProgram(...this.shaders);
        const positionAttributeLocation = webGl.getAttribLocation(this.program, "a_position");

        const resolutionUniformLocation = webGl.getUniformLocation(this.program, "u_resolution");
        const colorUniformLocation = webGl.getUniformLocation(this.program, "u_color");

        const positionBuffer = webGl.createBuffer();


        webGl.useProgram(this.program);

        // Turn on the attribute
        webGl.enableVertexAttribArray(positionAttributeLocation);

        // Bind the position buffer.
        webGl.bindBuffer(webGl.ARRAY_BUFFER, positionBuffer);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        const size = 2;          // 2 components per iteration
        const type = webGl.FLOAT;   // the data is 32bit floats
        const normalize = false; // don't normalize the data
        const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        const offset = 0;        // start at the beginning of the buffer
        webGl.vertexAttribPointer(
            positionAttributeLocation, size, type, normalize, stride, offset)

        // set the resolution
        webGl.uniform2f(resolutionUniformLocation,  webGl.canvas.width,  webGl.canvas.height);

        // draw 50 random rectangles in random colors
        for (let ii = 0; ii <1000; ++ii) {
            // Setup a random rectangle
            // This will write to positionBuffer because
            // its the last thing we bound on the ARRAY_BUFFER
            // bind point
            setRectangle(randomInt(630), randomInt(470), randomInt(5), randomInt(5));

            // Set a random color.
            webGl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);

            // Draw the rectangle.
            const primitiveType = webGl.TRIANGLES;
            const offset = 0;
            const count = 6;
            webGl.drawArrays(primitiveType, offset, count);
        }
    }
    render(){

    }
}
