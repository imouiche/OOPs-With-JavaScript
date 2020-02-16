function isLanscape(width, height){
    return (width > height);
}

function fissBuzz(input){
    if (typeof(input)!== 'number') return NaN;
    if(input % 3 == 0 && input % 5 == 0) return 'fizzBuzz';
    else if (input % 5 == 0) return 'Buzz';
    else if (input % 3 == 0) return 'Fizz';
    else return input;
}

let FizzBuzz = fissBuzz(15);
//console.log(FizzBuzz);

// check speed of cars and Demerit points

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){
        console.log('OK');
        return;
    }
   
   const points = Math.floor((speed - speedLimit)/kmPerPoint);
    if(points > 12)
        console.log('Licemse Suspended');
    else
        console.log('Points', points);
}

checkSpeed(72);

function countTruthy(array){
    let count = 0;
    for (let elt of array){
        if (elt)
            count++   
    }
    console.log(count)
}
countTruthy([undefined, '', 'Inoussa', 2, NaN])

function showProperties(obj){
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}
const movies ={
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movies);

function showStar(rows){
    for (let row =1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i<row; i++)
            pattern +='*';

        console.log(pattern);
    }
}

showStar(20);

function showPrime(limit){
    for (let number=2; number<= limit; number++)
        if(isPrime(number)) console.log(number);    
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++)
        if (number % factor === 0 )
          return false;
    return true;
}
showPrime(11)
