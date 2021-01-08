// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';

var frankie = {
  name: 'frankie',
  age: 0,
  interests: ['cuddling', 'chasing string', 'catnip'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithOtherCats: true,
  getAge: function () {
    console.log(this.name);
    this.age = randomAge(3, 12) + ' months';
    console.log(this.age);
  }
};

var jumper = {
  name: 'jumper',
  age: 0,
  interests: ['sleeping', 'eating'],
  isGoodWithKids: false,
  isGoodWithDogs: false,
  isGoodWithOtherCats: false,
  getAge: function () {
    console.log(this.name);
    this.age = randomAge(3, 12) + ' months';
    console.log(this.age);
  }
};

frankie.getAge();
jumper.getAge();


console.log(frankie);

function randomAge (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
var parentDiv = document.getElementById('kittenProfiles');

// create a new element, or elements, that represent frankie
// article
var frankieAtricle = document.createElement('article');
console.log(document);
parentDiv.appendChild(frankieAtricle);
console.log(document);

// inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image
var frankieName = document.createElement('h2');
frankieName.textContent = frankie.name;
frankieAtricle.appendChild(frankieName);

var frankieAge = document.createElement('p');
frankieAge.textContent = frankie.age;
frankieAtricle.appendChild(frankieAge);

var interestsList = document.createElement('ul');
frankieAtricle.appendChild(interestsList);

for(var i = 0; i < frankie.interests.length; i++){
  var interest = document.createElement('li');
  interest.textContent = frankie.interests[i];
  interestsList.appendChild(interest);
}

var frankieImage = document.createElement('img');
frankieImage.setAttribute('src','images/frankie.jpeg');
frankieAtricle.appendChild(frankieImage);
// attach those elements to the parent in the DOM.

// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild