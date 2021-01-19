'use strict';

var body = document.getElementById('page-body');

var newParagraph = document.createElement('p'); // <p> </p>

body.appendChild(newParagraph);

newParagraph.setAttribute('id','paragraph-js');
newParagraph.textContent = 'this is the content of the paragrapgh'; // <p id="">this is the content of the paragrapgh</p>

console.log(newParagraph);
console.log(document);


newParagraph.addEventListener('mouseover',showAlert);

function showAlert(){
  document.getElementById('p1').textContent = 'this was changd when last paragrapgh was clicked';
}














// // variables ...
// var x;
// console.log(a);
// console.log(x);
// x = 1;
// // multiple data types .. 
// // number 1 1.4 .... ( .... + - * / % ) 
// // String (+)
// // boolean (&& , || , !)
// console.log(x);

// // conditional statements (if - if else, switch)
// // if(condition - set of conditions){
// // this code runs only if the condition evaluates to true
// // } else {
// // this code runs only if the condition evaluates to false
// // }

// // write a program that prints the letter grade for the user.. where
// // the letter grade = A if numeric grade is above or equal to 90
// // B -> greater than or equal 80
// // C -> 70s
// // D -> 60s
// // F lower than 60



// if (x >= 90) {
//   console.log('A');
// } else if (x >= 80) {
//   console.log('B');
// } else if (x >= 70) {
//   console.log('C');
// } else if (x >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// // write a code that checks the floor number and outputs the following:
// // above ground if the value is positive, below ground if vlaue is negative and ground floor if the value is zero

// var floor = 0;

// if (floor > 0) {
//   console.log(floor + ' above ground');
// } else if (floor < 0) {
//   console.log(floor + ' below ground');
// } else {
//   console.log(floor + ' ground floor');
// }

// // write a code that prints a given number only if it is odd and divisible by 3

// var number = 12;

// // || , &&
// if (number % 3 === 0 && number % 2 !== 0) {
//   console.log(number);
// }

// // loops (while, for, do while)


// // while(condition / set of conditions){
// //   the code that will run as long as the condition evaluates to true
// // }

// console.log(findMaximum(1, 10, 3)); // arguments
// // print the number from 1 - 10
// // var x = prompt('insert an odd number');

// // while(x%2===0){
// //   x = prompt('wrong answer ... please try again and insert an odd number');
// // }

// // alert('correct answer!');
// // var x;

// // do{
// //   x = prompt('insert an odd number');
// // } while(x %2 ===0);

// // while(x <= 10){
// //   console.log(x);
// //   x++;
// // }

// // for(var i = starting value; condition ; update the counter ){
// //   the code will go here , it will run as long as the condition evaluates to true
// // }

// // for(var i = 5; i <= 15; i++){
// //   console.log(i);
// // }

// // functions ...
// function findMaximum(x, y, z) {   // params

//   if (x > y && x > z) {
//     return x;
//   } else if (y > x && y > z) {
//     return y;
//   } else {
//     return z;
//   }
// }
// var a = 9;

// // write a code that fills an array with all even numbers between 4 and 20


// function evenNumbers() {
//   // var arr = [];

//   // for (var i = 4; i <= 20; i = i + 2) {
//   //   arr.push(i);
//   // }

//   return [1,2,3,4,5];
// }
// x = evenNumbers();
// console.log(evenNumbers()[3]);