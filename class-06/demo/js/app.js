'use strict';
// the object
// var eiad = {
//   name: 'eiad',
//   age: 28.5,
//   weight: 86,
//   height: 180,
//   average:0,
//   favColor: 'blue',
//   favFood: ['Mansaf', 'Mjaddara', 'Kebbeh'],
//   jobDetails: {
//     title: 'software developer',
//     dateHired: '24-June',
//     salary: 2500
//   },

//   walk: function(){
//     console.log('I am walking');
//   },

//   talk: function(){
//     console.log('hello everyone! my name is '+this.name);
//   }
// };



// var jamila = {
//   name: 'Jamila',
//   age: 25,
//   weight: 65,
//   height: 153,
//   favColor: 'yellow',
//   favFood: ['burger', 'pizza', 'shawerma'],
//   jobDetails: {
//     title: 'software developer',
//     dateHired: '21-June',
//     salary: 2570
//   },

//   walk: function(){
//     console.log('I am walking');
//   },

//   talk: function(){
//     console.log('hello everyone! my name is '+this.name);
//   },

//   udpateAge: function(){
//     this.age = this.age + 1;
//     console.log(this.age);
//   }
// };

//accessing values:
// dot notation
// bracket notation

// var students = [eiad, jamila];

// for(var i=0; i < students.length; i++){
//   for(var j = 0; j < students[i].favFood.length; j++ )
//     console.log(students[i].favFood[j]);
// }


// updating values:
// console.log('before',eiad);
//eiad.weight = 96;
//eiad['weight'] = 96;
//console.log('after',eiad);

// adding properties:
// eiad['skinColor'] = 'White';
// console.log(eiad);


// eiad.talk();
// jamila.talk();
// jamila.udpateAge();
// console.log(jamila);


console.log(document);
var welcomeParagraph = document.getElementById('welcome');
welcomeParagraph.textContent = 'this is how we change this';



