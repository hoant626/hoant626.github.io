var name = 'trudy';
console.log("My name is", name)

var number = 17;
console.log(number)

var faveNumber = '17';
console.log("My favorite number is", faveNumber)

var what = true;
console.log(what)

var nameLetters = ['t','r','u','d','y'];
console.log("This is how you spell my name:", nameLetters)

var array = [22, 'wow', false];
console.log(array)

var lastName = "hoang";
var fullName = name + lastName;
console.log("My full name is", fullName)

var ten = 10;
var ninety = 90;
console.log(ten+ninety)

var firstItem = nameLetters[0];
var lastItem = nameLetters[nameLetters.length-1];
console.log("These are the first and last letters of my name:", firstItem, lastItem)

var word = 'supercalifragilisticexpialidocious';
console.log(word.length)

console.log(name.length == lastName.length)

if (i==16) {
  console.log('EVERYONE IS HERE')
} else {
  console.log("smh everyone's not here")
}

for (var i = 0; i < nameLetters.length; i++) {
  console.log(nameLetters[i])
}

var date = new Date;
var hour = date.getHours();
if (hour > 7 && hour < 9.66) {
  console.log("it's time")
} else {
  console.log("it's not time")
}

var day = date.getDay();

if (day == 1) {
  console.log("it's monday")
} else if (day== 2) {
  console.log("it's tuesday?")
} else if (day == 3) {
  console.log("it's wednesday???")
} else if (day == 4) {
  console.log("it's thursday!!?!?!!?")
} else if (day == 5) {
  console.log("IT'S FRIDAY!!?!??!")
} else if (day == 6) {
  console.log("ITS SATIRUDAY!?!?!?!")
} else if (day == 0) {
  console.log("SUNDAYAYyayy")
}

var food = ["tofu","donut","fries"];
var animal= ["tiger","sun bear", "monkey"];
var places=["my house", "my bed", "my room"];
var pokemon=["bulbasaur", "wobbuffet", "turtwig"];

var allArrays = [
  food,
  animal,
  places,
  pokemon,
];

for (var i = 0; i < allArrays.length; i++) {
  for (var j = 0; j < allArrays.length; j++) {
    allArrays[i][j]
  }
}
