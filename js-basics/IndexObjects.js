//Object-oriented programming (OOP)

const circle ={
    radius: 1,
    Location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw')
    }
};

circle.draw();

// 2- factory functions used to define objects
function createCircle(radius){
    return {
        radius, // -> radius: radius,
        draw(){
            console.log('draw')
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);

// 3- Constructor function to define objects
//This apprach uses Pascal Notation ie. Not Camel Notation

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    //return this; this is happening under the hood
}

const circle3 =  new Circle(1); 

for (let key of Object.keys(circle1))
    console.log(key);

for (let entry of Object.entries(circle1))
    console.log(entry);

    // clone an object
/* const another = {};
for(let key in circle1)
    another[key] = circle1[key];
 */
//const another = Object.assign({}, circle1);
const another = {...circle1}; //using spread oject
console.log(another);
const name = 'Inoussa';
const template = `Hi ${name},
Thanks for joining my mailing list
Regards,
Inoussa`;
console.log(template);
    