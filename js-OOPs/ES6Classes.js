class Circle{
    //the body of this class is executed in Strict mode
    constructor(radius){
        this.radius = radius;
        this.move = function() {}
    }

    // instance method
    draw() {
        console.log('draw');
    }

    static parse(str){
        const radius = JSON.parse(str).radius
        return new Circle(radius);
    }
}

const c = new Circle(1);

//Private Mamber Using Symbols in ES6

/* const _radius = Symbol(); // a uniq identifier
const _draw = Symbol(); // make a method private

class Circle1{
    constructor(radius){
        this[_radius] = radius; //private property
    }
    //computed property name
    [_draw]() {

    }
}
const c1 = new Circle1(1); 
const key = Object.getOwnPropertySymbols(c1)[0];
console.log(c1[key]); */


// 6 Private Mamber Using WeakMaps
//WeakMap is a dictionary where keys are obj and values can be anything

 /* const _radius = new WeakMap(); // make a method private
 const _move = new WeakMap();

class Circle2{
    constructor(radius){
        _radius.set(this, radius); //private property
        //define a private method
       /*  _move.set(this, function(){
        console.log('move', this); //here this is undefined and not the window it shld be
    }); 

    _move.set(this, () => {
        console.log('move', this); //here this repres the Circle obj then we can access all prop & mthd
    });
    }
    
    //suppose ww to be able to read this property ousite
    draw(){
        _move.get(this)(); //call the private method
        console.log('draw');
        console.log(_radius.get(this)); //get the private property
    }
}

const c2 = new Circle2(1);  */


//Getter and Setter

const _radius = new WeakMap(); // make a method private

class Circle3{
    constructor(radius){
        _radius.set(this, radius); //private property
    }

    get radius(){
        return _radius.get(this);
    }
    set radius(value){
        if(value <= 0)
            throw new Error('invalid status');
        _radius.set(this, value);
    }
}

const c3 = new Circle3(1); 