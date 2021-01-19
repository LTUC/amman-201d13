'use strict';
// hoisting



var obj = {
  a:1,
  'b 3':2,
  c:7
};

function Cat(){
  var p = 1;
}

p = 5;

('a')
function(propName){
obj[propName] = 7;
}


var a;
var b = 8;
a = 5;

x = a +b;

var mul = multiply(a,b);
var div = divide(x,a);

console.log(mul);



function multiply(num1,num2){
  return num1 * num2;
}

var x;

var divide = function(num1,num2){
  return num1/num2;
};

var mul2 = multiply(a,b);
var divide2 = divide(x,a);
console.log(mul2,divide2);
