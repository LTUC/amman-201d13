'use strict';


// Function Declaration

// function welcomeMessage(){
//   alert('welcome to our page');
// }
// welcomeMessage();

// var userInput = prompt('whats your name?');

// // console.log(userInput);
// // var userN = 'samer';
// function getName (userName){
//     // console.log('inside the functio',userInput);

 
//   var output = 'hello '+userName;
//   return output;
// }

// // console.log('user name from ins ',userN);
// // console.log(output);

// console.log(getName(userInput));
// // getName('suhaib');


// function square(length){
//     var area = length ** 2;
//     // var area = Math.pow(length,2);
//     var perimeter = length * 4;

//     return [area, perimeter]

//     // console.log('after rturn',area);
// }
// var values =square(5);
// console.log(values);
// console.log('area only',values[0]);

// console.log(square(7));

// function sumArr(num1,num2) {
//   var output = num1 + num2;
//   return[output,num1,num2];
// }
// // console.log(sumArr(5,10));
// var fullValue = sumArr(5,10);
// console.log('full value of the return',fullValue);
// var number1 = fullValue[1];
// console.log('number');
// console.log(sumArr(5,10));

///////////////////////////////
// function expression

// var getAge = function (year){
//   var output = 2021 - year;

//   return output;
// };
// console.log(getAge(1990));
// console.log(getAge(2001));
// console.log(getAge(1880));
///////////////////////////////////

// Immediatly invoked functions
// (function() {
//   console.log('Good bye');
// })();

// (function(user) {
//   console.log('Good bye',user);
// })('ahmad');

////////////////////////////////
// car = 'BMW';
// // undefined?

// // error?
// var car = 'mercedes';
// // var car = 'mercedes';
// console.log(car);


// function welcomeMessage(){
//   alert('welcome to our page');
// }
// welcomeMessage();

// // welcomeMessage =>UNDEFINED
// // var welcomeMessage = function (){
// //     alert('welcome to our page');
// // }
// // welcomeMessage();

//////////////////////////////
// SCOPES

// global variable it can be used anywhere and its NOT inside A FUCNTION 

// local variable is inide A function and can only be used INSIDE 

// if we want the value of a local variable we return it 
// global scope
// var globalFirstName= 'hana\'a';
// // console.log(globalFirstName);
// for (var i = 1; i<2 ; i++){
//     // inside for
//     console.log('inside for',i);
// }
// // var i = 5;
// console.log('global',i);

// function info(age) {
// //   console.log('inside function local',i);
//   var localLastName = 'maratouq';
// //   console.log('parameter',age);
// //   console.log(localLastName);
// //   console.log('global vriable inside of a function :',globalFirstName);\
//  var output = globalFirstName + localLastName + ' is ' + age + ' years old' ;
//   return output;
// }
// // // console.log('parameter',age);
// // console.log('localLastName:', info(28));
// console.log(info(25));




// var globalFirstName= 'hana\'a';
// // console.log(globalFirstName);

// function info(age) {
//     // for (var j = 5; j<9; j++){
//     //     console.log('inside local for',j);
//     // }

//   var localLastName = 'maratouq';

//  var output = globalFirstName + localLastName + ' is ' + age + ' years old' ;
//   return output;
// }
// // console.log('in the global scope',j);
// // // console.log('parameter',age);
// // console.log('localLastName:', info(28));
// console.log(info(25));


// for(var i = 10 ; i<15; i ++){
//     // console.log(i);
    
// }



// for (var j=0;j<5;j++ ){
//     console.log(i);
// }

function sum(num1,num2) {
    return num1+num2
    
    
}
console.log();

function multiply() {
   var sum1= sum(5,10)
   var sum2= sum(10,20)
   console.log(sum1);
   console.log(sum2);

  var sumOfMultiply = sum1*sum2
  return sumOfMultiply
    
}
console.log(multiply());

