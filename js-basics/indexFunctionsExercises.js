//sum

const total = sum([0,1,2,3]);
console.log(total);
/* 
function sum(arg){
    if(Array.isArray(arg))
        return arg.reduce((a,b) => a + b);
    let total = 0;
    for(let elt of arguments)
        total += elt;
    return total;
} */
function sum(...items){
    //console.log(items[1])
    if(items.length ===1 && Array.isArray(items[0]))
        items = [...items[0]]
   // console.log(items);
    return items.reduce((a,b) => a + b)
}

const circle = {
    radius: 2,
    //read only
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}
circle.radius = 4
console.log(circle.area);



function countOccurrence(array, searchElement){
    if (!Array.isArray(array))
        throw new Error('The first arg must be an array ');

    if(!array.includes(searchElement)) return 0;
    return array.reduce((accumalator, current) => {
        const occurrence = (current === searchElement) ? 1: 0;
        return accumalator + occurrence;
    }, 0)
}

const numbers = [1,2,3,4,5];

try{
    const count = countOccurrence(null, 1);
    console.log(count);
}
catch (e){
    console.log(e.message);
}
