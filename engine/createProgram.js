import { webGl } from './EngineWebGl';

export default (fragmentShader, vertexShader) => {
    const program = webGl.createProgram();

    webGl.attachShader(program, fragmentShader);
    webGl.attachShader(program, vertexShader);

    webGl.linkProgram(program);
    const success = webGl.getProgramParameter(program, webGl.LINK_STATUS);
    if (success) {
        return program;
    }
    console.error( webGl.validateProgram(program));
    webGl.deleteProgram(program);
}