import { webGl } from './EngineWebGl';

export default (type, source)=>{
    const shader = webGl.createShader(type);   // создание шейдера
    webGl.shaderSource(shader, source);      // устанавливаем шейдеру его программный код
    webGl.compileShader(shader);             // компилируем шейдер
    const success = webGl.getShaderParameter(shader, webGl.COMPILE_STATUS);
    if (success) {                        // если компиляция прошла успешно - возвращаем шейдер
        return shader;
    }
    webGl.deleteShader(shader);
}