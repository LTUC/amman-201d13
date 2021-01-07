'use strict';
// Falsy values
// boolean false : var boolean = false;
// the number 0 : var x = 0
// the empty string : var name = '';
// NaN : var x = 5 / 'test';
// a variable that is not assigned a value (undefined)

// Truthy vales
// boolean true: var boolean = true;
// any numeric value other than 0: var x = 1
// non-empty strings : 'test', '0', 'true', 'false'

var valueToTest = '';

if (valueToTest) {
  console.log(valueToTest + ' this value evaluates to true');
} else {
  console.log(valueToTest + ' this value evaluates to false');
}

var answer = prompt('Do you think I love chocolate?');

switch (answer.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Yes! I love chocolate');
    break;
    case 'no':
  case 'n':
    alert('You are wrong! I actually do.');
    break;
  default:
    alert('invalid answer');
}