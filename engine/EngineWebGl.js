let webGl;

class EngineWebGl {
   static render(Game, canvas){
       webGl = canvas.getContext('webgl');

      const game = new Game({});
      game.render();
   }
}

export {
   webGl,
   EngineWebGl
}

