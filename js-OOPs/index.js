function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};

   let computeOptimumLocation = function(){
        //---
    }

    this.draw = function(){
        //closure
        computeOptimumLocation();
        //defaultLocation
        //this.radius
        console.log('draw');
    }
}

//const circle = new Circle(10);
//console.log('Hello world');


//Getter and setter to access local or private variables
function Circle1(radius){
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};

    this.draw = function(){
        console.log('draw');
    };
    //getter
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid location');
            
            defaultLocation = value;
        }
    });
}

const circle1 = new Circle1(10);
circle1.defaultLocation = {x: 0.1, y: 0.3};
circle1.draw();

