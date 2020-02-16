function mixin(target, ...sources){
    Object.assign(target, ...sources); // now with spread operator
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('swim');
    }
};

//copy properties of an object to another
//const person = Object.assign({}, canEat, canWalk);

function Person(){
}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish(){
}

//modify the prototype of Goldfish to include canEat and canSwim capabilities
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);