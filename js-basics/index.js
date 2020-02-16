const name = 0.2
let person = {
    name: "Inoussa",
    age: 30
}
person.name = "John"; //dot notatio
person['name'] = 'hanis'; // bracket notation

//Array
let selectColor = ['red', 'blue']
selectColor[2] = 'green';
selectColor[4] = 2
console.log(selectColor);

//performing a task
function greet(name, lastName){
    console.log("hello: " + name + ' ' + lastName);
}

// calculating a value
function square(number){
    return number * number;

}

//greet('Ouretou', 'Inoussa');
console.log(square(2))
let x = 1
console.log(x===1)

//Ternary Operator
let point = 100;
let customer = point > 100? 'gold' : 'silver';
console.log(customer);

// Access control system
//Read, write, Execute
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermission = 2;
const ExecutePermission = 1;

let myPermission =0;
myPermission = myPermission | readPermission | writePermission;
let message = 
(myPermission & readPermission)? 'yes' : "no";
console.log(myPermission);

//Swapping variable

let a = 'red';
let b = 'blue';
let c = a;
a = b, b = c;
console.log(a)
console.log(b)
//const person = {name:'inoussa', age:'30'};
for (let key in person)
    console.log(key, person[key]);
const colors = ['red', 'green', 'blue'];
for(let color of colors)
    console.log(color);

function max(a,b){
    return (a>b)? a:b;
}
let maxNumber = max(5,5);
console.log(maxNumber);    