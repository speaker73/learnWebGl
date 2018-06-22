import {Component, createProgram, compileShader} from "engine";
import { webGl } from 'engine/EngineWebGl';

import vertexShader2d from "./vertexShader2d.glsl";
import fragmentShsader from './fragmentShader.glsl';

export default class Second extends Component{
    constructor(props){
        super(props);

        this.shaders = [
            compileShader( webGl.VERTEX_SHADER, vertexShader2d),
            compileShader( webGl.FRAGMENT_SHADER, fragmentShsader)
        ];
        this.program = createProgram(...this.shaders);

        console.log(this.program);
        const resolutionUniformLocation =  webGl.getUniformLocation(this.program, "u_resolution");

        const positions = [
            10, 20,
            80, 20,
            10, 30,
            10, 30,
            80, 20,
            80, 30,
        ];

        webGl.bufferData(webGl.ARRAY_BUFFER, new Float32Array(positions), webGl.STATIC_DRAW);
        webGl.useProgram(this.program);

        // установка разрешения
        webGl.uniform2f(resolutionUniformLocation, webGl.canvas.width, webGl.canvas.height);

        const primitiveType = webGl.TRIANGLES;
        const offset = 0;
        const count = 6;
        webGl.drawArrays(primitiveType, offset, count);
    }
    render(){

    }
}
