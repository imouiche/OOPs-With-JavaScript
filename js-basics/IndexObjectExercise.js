// let address = createAddress('a', 'b', 'c');
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
 console.log(areEqual(address1, address2));
 console.log(areSame(address1, address2));

 // Factory function
 function createAddress(street, city, zipCode){
     return  {
        street,
        city,
        zipCode
    };
   
 }

 //Constructor Fucntion
 function Address(street, city, zipCode){
     this.street = street;
     this.city = city;
     this.zipCode = zipCode;

 }

 //equal if all properties are the same
 function areEqual(address1, address2){
     return address1.street === address2.street&&
     address1.city === address2.city &&
     address1.zipCode === address2.zipCode;
 }

 // same if they are referencing the same obj
 function areSame(address1, address2){
    return address1 === address2;
 }
    
 /* let post = {
     title: 't',
     body: 'b',
     author: 'a',
     views: 10,
     comments: [
         {author: 'ca', body : 'cb'},
         {author: 'ca1', body : 'cb1'}
        
        ],
     isLive: true
 }
 */
let post = new Post('a', 'b', 'c');

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.isLive = false;
}

 console.log(post);

 // Price range object app
 let priceRanges = [
     {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
     {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
     {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30},

];
//to store the list of restaurants
let restaurants = [
{averagePerPerson: 5}
];

//date
const now = new Date();
const date1 = new ('May 11 2018 09:00');
const date2= new ('2018, 4, 11, 9');
now.setFullYear(2018)