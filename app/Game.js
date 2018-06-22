import {Component, compileShader, createProgram} from "engine";
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';
import { webGl } from 'engine/EngineWebGl';

import {Second, Third} from './components';


export default class Game extends Component{
    constructor(props){
        super(props);
        console.log(webGl)
        this.shaders = [
            compileShader(webGl.VERTEX_SHADER, vertexShader),
            compileShader(webGl.FRAGMENT_SHADER, fragmentShader)
        ];
        this.program = createProgram(...this.shaders);

        const positionAttributeLocation = webGl.getAttribLocation(this.program, "a_position");
        console.log(positionAttributeLocation);
        const positionBuffer = webGl.createBuffer();
        console.log(positionBuffer);
        webGl.bindBuffer(webGl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            0, 0,
            0, 0.5,
            0.7, 0,
        ];
        webGl.bufferData(webGl.ARRAY_BUFFER, new Float32Array(positions), webGl.STATIC_DRAW);

        //render
        webGl.viewport(0, 0, webGl.canvas.width, webGl.canvas.height);
        // очищаем canvas
        webGl.clearColor(0, 0, 0, 0);
        webGl.clear(webGl.COLOR_BUFFER_BIT);
// говорим использовать нашу программу (пару шейдеров)
        console.log(this.program);
        webGl.useProgram(this.program);
        webGl.enableVertexAttribArray(positionAttributeLocation);
        // Привязываем буфер положений
        webGl.bindBuffer(webGl.ARRAY_BUFFER, positionBuffer);

// Указываем атрибуту, как получать данные от positionBuffer (ARRAY_BUFFER)
        const size = 2;          // 2 компоненты на итерацию
        const type = webGl.FLOAT;   // наши данные - 32-битные числа с плавающей точкой
        const normalize = false; // не нормализовать данные
        const stride = 0;        // 0 = перемещаться на size * sizeof(type) каждую итерацию для получения следующего положения
        const offset = 0;        // начинать с начала буфера
        console.log(positionAttributeLocation, size, type, normalize, stride, offset);
        webGl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

        const primitiveType = webGl.TRIANGLES;
        // const offset = 0;
        const count = 3;
        webGl.drawArrays(primitiveType, offset, count);
    }
    render(){
       return [
           new Second({title:'Second'}),
           new Third({title:'Third'})
       ]
    }
}