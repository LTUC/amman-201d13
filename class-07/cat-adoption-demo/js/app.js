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

// create constructor
function Kitten(kittenName, interests, isGoodWithKids,isGoodWithDogs,isGoodWithOtherCats){
  this.kittenName = kittenName;
  this.age = 0;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
  this.imgLink = 'images/'+kittenName+'.jpeg';
}

Kitten.prototype.getAge = function(){
  console.log(this.kittenName);
  this.age = randomAge(3, 12) + ' months';
  console.log(this.age);
};

Kitten.prototype.render = function(){

  // create and append section
  var parentDiv = document.getElementById('kittenProfiles');
  var kittenSection = document.createElement('section');
  parentDiv.appendChild(kittenSection);

  // create and append h3 for the name
  var nameElement = document.createElement('h3');
  nameElement.textContent = this.kittenName;
  kittenSection.appendChild(nameElement);

  // create and append image
  var kittenImage = document.createElement('img');
  kittenImage.setAttribute('src',this.imgLink);
  kittenSection.appendChild(kittenImage);

  // create and append the age
  var kittenAge = document.createElement('p');
  kittenAge.textContent = this.age;
  kittenSection.appendChild(kittenAge);

  // create and append the list of interests
  var interestsList = document.createElement('ul');
  kittenSection.appendChild(interestsList);
  var interestListItem;
  for(var i = 0; i < this.interests.length; i++){
    interestListItem = document.createElement('li');
    interestListItem.textContent = this.interests[i];
    interestsList.appendChild(interestListItem);
  }

  // create and append the table
  var moralsTable = document.createElement('table');
  kittenSection.appendChild(moralsTable);

  var firstRow = document.createElement('tr');
  moralsTable.appendChild(firstRow);

  var secondRow = document.createElement('tr');
  moralsTable.appendChild(secondRow);

  var firstHeading = document.createElement('th');
  firstHeading.textContent = 'Is Good With Dogs';
  firstRow.appendChild(firstHeading);

  var secondHeading = document.createElement('th');
  secondHeading.textContent = 'Is Good With kids';
  firstRow.appendChild(secondHeading);

  var thirdHeading = document.createElement('th');
  thirdHeading.textContent = 'Is Good With other cats';
  firstRow.appendChild(thirdHeading);

  var firstdata = document.createElement('td');
  firstdata.textContent = this.isGoodWithDogs;
  secondRow.appendChild(firstdata);

  var seconddata = document.createElement('td');
  seconddata.textContent = this.isGoodWithKids;
  secondRow.appendChild(seconddata);

  var thirddata = document.createElement('td');
  thirddata.textContent = this.isGoodWithOtherCats;
  secondRow.appendChild(thirddata);


};

var frankie = new Kitten('frankie',['cuddling', 'chasing string', 'catnip'],true,false,true);
frankie.getAge();
frankie.render();
console.log(frankie);

var jumper = new Kitten('jumper',['sleeping', 'eating'],false,false,false);
jumper.getAge();
jumper.render();
console.log(jumper);




function randomAge (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
