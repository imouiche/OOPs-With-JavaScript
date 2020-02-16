class Shape {
    constructor(color){
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

//to have the circle inheist from Shape class we use "extends"
class  Circle extends Shape{
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // method overring
    move(){
        super.move(); //call move method from Parent/Shape class
        console.log('circle move');
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 1);