export default class Component {
   constructor({
          children=[]
   }){
       this.children = children;
   }
   render(){
       this.children.forEach(child=>{
           child.render();
       })
   }
}