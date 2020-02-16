
const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max){
    const array = [];
    for (let i=min; i <= max; i++)
        array.push(i);
    return array;
}

const numbers1 = [1 , 2, 3, 4];
console.log(includes(numbers1, 2));

function includes(array, searchElement){
    for(let elt of array){
        if(elt === searchElement) 
            return true;
    }
   return false;
}

console.log(except(numbers1, [3,2]));
function except(array1, array2){
    const output = [];
    for(let elt of array1){
        if (!includes(array2, elt))
            output.push(elt);
    }

    return output;
}

function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid Offset');
        return;
    }
    const output = [...array];
    const element = output.splice(index,1)[0];
    output.splice(position, 0, element); 

    return output;


}

const num3 = [1,2,6,4];
const output = move(num3, 0, -1);
//console.log(num3.splice(1, 1)[0]);
console.log(output);

//countOccurrence

function countOccurrence(array, searchElement){

    if(!array.includes(searchElement)) return 0;
    return array.reduce((accumalator, current) => {
        const occurrence = (current === searchElement) ? 1: 0;
        return accumalator + occurrence;
    }, 0)
}

//GetMax

function getMax(array){
    if(array.length === 0) return undefined;
   return array.reduce((a, b) => (a > b) ? a : b);
}

console.log(getMax(num3));

//Movies

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.7}
]
//chaining
const title  = movies
.filter(values => values.year === 2018 && values.rating >= 4)
.sort((a, b) => a.rating - b.rating)
.reverse() //descending order
.map(m => m.title)

console.log(title);