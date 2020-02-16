let person = {name: "Inoussa", age: 3};
/* let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString"); */

Object.defineProperty(person, "age", {
    writable: true,
    enumerable: false,
    configurable: false
})

delete person.age;
console.log(person);

//Constructor prototype

function Circle(radius){
    //instance members
    this.radius = radius;
    this.move =function(){
        console.log('move');
    }
}

//prototype members
Circle.prototype.draw = function(){
    this.move();
    console.log('draw');
};

let c1 = new Circle(1);
let c2 = new Circle(1);

//override the toString() of the Circle Obj
Circle.prototype.toString = function(){
    return'Circle with radius ' + this.radius;
}

// Iterating instance and Prototype mambers

//returns instance members
console.log(Object.keys(c1));

//returns all members(instance/own and prototype properties)
for(let key in c1)
    console.log(key);

/* c1.hasOwnProperty('radius')
true
c1.hasOwnProperty('draw')
false */