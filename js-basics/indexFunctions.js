//function Declaration
function walk(){
    console.log('walk');
}
// function Expression
let run = function(){
    console.log('run');
}

// 2 - Arguments

function sum(){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
   // console.log(arguments);
  
}

// - Rest Operation
function sum(discount, ...args){
    const total = args.reduce((a,b) => a + b);
   // console.log(arguments);
    return total * (1-discount);
}
console.log(sum(0.1, 20, 30, 10))

// 5 - default parameter

function interest(principal, rate=3.5, years=5){
   /*  rate = rate || 3.5; //default rate = 3.5 is rate is not provided
    years = years || 5; */
    
    return principal * rate /100 * years;
}

console.log(interest(1000))

// 6- Getter and Setter

const person = {
    firstName: 'Inoussa',
    lastName: 'Mouiche',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first name and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    
    person.fullName = 'Hanis Nsangou' ;
}
catch (e){
   alert(e);
}
console.log(person);

//Local and Global
// The "This" keyword 

//method -> obj
//ficntion -> global (window, global)

const video ={
    title: 'a',
    play(){
        console.log(this);
    }
}

video.stop = function(){
    console.log(this);
};

function Video(title){
    this.title =title;
    console.log(this);
}

const v = new Video('b');
//video.play();

const video1 ={
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
}

//Chnaging this -=NOT recommended
const video2 ={
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
}
//video2.showTags();

//another approach
function playVideo(a,b){
    console.log(this);
}

playVideo();
playVideo.call({name: 'Inoussa'}, 1, 2);
playVideo.apply({name: 'Inoussa'}, [1, 2]);
playVideo.bind({name: 'Inoussa'})();

const video3 ={
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        }.bind(this));
    }
}
//video3.showTags();

const video4 ={
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        const self = this;
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}
video4.showTags();