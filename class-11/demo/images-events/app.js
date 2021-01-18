'use strict';

var leftImageElement = document.getElementById('left-image');
var rightImageElement = document.getElementById('right-image');
var maxAttempts = 10;
var userAttemptsCounter = 0;

var leftImageIndex;
var rightImageIndex;

var imagesNames = [];
var votes = [];

function GoatImage(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  GoatImage.prototype.allImages.push(this);
  imagesNames.push(name);
}

GoatImage.prototype.allImages = [];
new GoatImage('cruisin-goat','images/cruisin-goat.jpg'); // 0
new GoatImage('goat-away','images/goat-away.jpg');       // 1
new GoatImage('goat-out-of-hand','images/goat-out-of-hand.jpg');   //2
new GoatImage('sassy-goat','images/sassy-goat.jpg');               //3
new GoatImage('smiling-goat','images/smiling-goat.jpg');           //4
new GoatImage('sweater-goat','images/sweater-goat.jpg');           //5

console.log(GoatImage.prototype.allImages);

renderTwoRandomImages();

leftImageElement.addEventListener('click',handleUserClick);
rightImageElement.addEventListener('click',handleUserClick);

function handleUserClick(event){
  userAttemptsCounter++;

  if(userAttemptsCounter <= maxAttempts){
    if(event.target.id === 'left-image'){
      GoatImage.prototype.allImages[leftImageIndex].votes++;
    } else {
      GoatImage.prototype.allImages[rightImageIndex].votes++;
    }
    renderTwoRandomImages();

  } else {
    // handle end of voting
    var resultsList = document.getElementById('results-list');
    var goatResult;
    for(var i = 0; i < GoatImage.prototype.allImages.length; i++){
      goatResult = document.createElement('li');
      goatResult.textContent = GoatImage.prototype.allImages[i].name + 'has '+ GoatImage.prototype.allImages[i].votes + ' votes';
      resultsList.appendChild(goatResult);
    }
    rightImageElement.removeEventListener('click',handleUserClick);
    leftImageElement.removeEventListener('click',handleUserClick);
    
for(var i = 0; i < GoatImage.prototype.allImages.length; i++){
  votes.push(GoatImage.prototype.allImages[i].votes);
}
    chart.config.data.datasets[0].data = votes;
  }

}


function renderTwoRandomImages(){
  leftImageIndex = generateRandomIndex();

  do{
    rightImageIndex = generateRandomIndex();
  } while(leftImageIndex === rightImageIndex);

  leftImageElement.src = GoatImage.prototype.allImages[leftImageIndex].source;
  rightImageElement.src = GoatImage.prototype.allImages[rightImageIndex].source;
}

function generateRandomIndex(){
  return Math.floor(Math.random() * (GoatImage.prototype.allImages.length));
}



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: imagesNames,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: votes
        }]
    },

    // Configuration options go here
    options: {}
});



console.log(chart);

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
  - A user clicks on a goat
      - ? check if total clicks is 10 ?
        - stop letting the user click
        - display the number of clicks
      -? If not ?
        - update clicked images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats
  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions
*/


