'use strict';

var table = document.getElementById('carsTable');

function Car(carModel,modelYear,manufacturer){
  this.carModel = carModel;
  this.modelYear = modelYear;
  this.manufacturer = manufacturer;
  this.price = generateRandomPrice();
  Car.prototype.allCars.push(this);
}
Car.prototype.allCars = [];
Car.prototype.display = function(){
  var carRow = document.createElement('tr');
  table.appendChild(carRow);

  var carModelData = document.createElement('td');
  carModelData.textContent = this.carModel;
  carRow.appendChild(carModelData);

  var carModelYear = document.createElement('td');
  carModelYear.textContent = this.modelYear;
  carRow.appendChild(carModelYear);

  var priceData = document.createElement('td');
  priceData.textContent = this.price;
  carRow.appendChild(priceData);

  var manData = document.createElement('td');
  manData.textContent = this.manufacturer;
  carRow.appendChild(manData);

};


if(localStorage.getItem('carsObjects')){
  var lsArray = JSON.parse(localStorage.getItem('carsObjects'));
  for(var i = 0; i < lsArray.length; i++){
    new Car(lsArray[i].carModel, lsArray[i].modelYear, lsArray[i].manufacturer);
  }
}
createTable();


//var allCars = [];






var form = document.getElementById('carsForm');
form.addEventListener('submit',addCar);

function addCar(event){
  event.preventDefault();
  var carModelValue = event.target.carModel.value;
  var modelYearValue = event.target.modelYear.value;
  var manufacturer = event.target.manufacturer.value;

  var userCar = new Car(carModelValue, modelYearValue,manufacturer);

  localStorage.setItem('carsObjects', JSON.stringify(Car.prototype.allCars));
  // userCar.display();
  createTable();

  console.log(Car.prototype.allCars);
}



function generateRandomPrice(){
  return Math.floor(Math.random() * (100000 - 7000) + 7000);
}


function createTable(){
  table.innerHTML = '';
  createHeader();
  for(var i = 0; i < Car.prototype.allCars.length; i++){
    Car.prototype.allCars[i].display();
  }
}

function createHeader(){
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  var carModelHeader = document.createElement('th');
  carModelHeader.textContent = 'Car Model';
  headerRow.appendChild(carModelHeader);

  var modelYearHeader = document.createElement('th');
  modelYearHeader.textContent = 'Model Year';
  headerRow.append(modelYearHeader);

  var priceHeader = document.createElement('th');
  priceHeader.textContent = 'Price';
  headerRow.append(priceHeader);

  var ManHeader = document.createElement('th');
  ManHeader.textContent = 'Manufacturer';
  headerRow.append(ManHeader);
}


// function addCarToTable(carObject){

// }
