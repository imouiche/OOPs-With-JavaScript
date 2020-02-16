//creating your own prototype

//intermediate Function Inheritance
function extend(Child, Parent){
//Make the Circle to inherite from Shape obj
// Circle.prototype = Object.create(Object.prototype); -> before
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Circle;
}

function Shape(color){
    this.color = color;
}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius, color){
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

//overriding duplicate method of the baseObj -Shape
Circle.prototype.duplicate = function(){
    console.log('duplicate circle');
}

Circle.prototype.draw = function(){
    console.log('draw');
}

function Square(size){
    this.size = size;
}

extend(Square, Shape);

let s = new Shape();
let c = new Circle(1, 'red');
let sq = new Square(10);

//Method overriding


