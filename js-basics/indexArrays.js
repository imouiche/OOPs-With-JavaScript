const array = [3, 4];
array.push(5, 6)
//array.push() to remove the last elt
array.unshift(1, 2);
//array.shift() remove at the begining
array.splice(2,0, 'a', 'b');
//array.splice(2, 1); remove one elt from position 2 


console.log(array);
console.log(array.indexOf('f'));

//for reference type variables
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

const course = courses.find(function(course){
    return course.name === 'a' || course.id == 1;
});
const course1 = courses.findIndex(function(course){
    return course.name === 'a';
});
console.log(course1);

//arrow functions

const course2 = courses.find(course => course.name === 'a');
console.log(course2);

// 6- Removing Element from an array
/* Solutions
array = [];
array.length = 0;
array.slice(0, array.length); */

// 8 combinign and Slicing Arrays

const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
const slice = combined.slice(2, 4)

// 9 The spread Operator
const combined1 = [...first, 'a', ...second, 'b'];
console.log(combined1);

//Iterating over an array
first.forEach((num, index,) => console.log(index, num));

// 10 Joining Array
const joined = second.join(',.');
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);
console.log(parts.join('-'));

// sorting Arrays/Objects

const courses1 = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Jascript'}
];

courses1.sort(function(a, b){
    const nameA = a.name.toUpperCase; //or lower case
    const nameB = b.name.toUpperCase;
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(courses1);

//Testing the Elements of an array
const numbers = [1,-2,3,4];
const allPositive = numbers.every(elt => elt >= 0);
const atLeastOnePositive = numbers.some(elt => elt >= 0);

//Filtering Arrays
const filtered = numbers.filter(elt => elt >= 0);
//console.log(filtered);
//Mapping an array
const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

const items1 = filtered.map(n => ({value: n}));

//chanining 
const items3 = numbers
                .filter(elt => elt >= 0)
                .map(n => ({value: n}))
                .filter(obj => obj.value > 1)
                .map(obj => obj.value);

console.log(items3);

// 16 - Reducing an Array
const numbers2 = [1,-1,2,3];
//sum of the array

const sum = numbers2.reduce((a, b) => a + b);

console.log(sum);
