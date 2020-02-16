//creating your own prototype

//intermediate Function Inheritance
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
    }
    
    function Shape(color){
        this.color = color;
    }
    Shape.prototype.duplicate = function(){
        console.log('duplicate');
    }
    
    function Circle(){
    }
    
    extend(Circle, Shape);
    
    //overriding duplicate method of the baseObj -Shape
    Circle.prototype.duplicate = function(){
        console.log('duplicate circle');
    }

    function Square(){

    }
    
    extend(Square, Shape)
    
    //overriding duplicate method of the baseObj -Shape
    Square.prototype.duplicate = function(){
     console.log('duplicate square');
    }
    
   let c =  new Circle();
    
   const shapes = [
       new Circle(),
       new Square()
   ]
    
   for(let shape of shapes)
    shape.duplicate();