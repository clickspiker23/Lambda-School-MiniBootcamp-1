// Intro to Javascript 
// Scratch file of getting familiar with javascript


var twocubed = Math.pow(2,3);
var rounded = Math.round(7.33);
var roundUp = Math.ceil(2.00001);
var roundDown = Math.floor(5.9999999);
var name = "terminator";
var favoriteNumber = 15;
var likesPizza = true;
var age = 27;
age = age + 50;


var firstName = "John";
var lastName = "Connor";
var fullName = firstName + " " + lastName;


console.log(name);
console.log(favoriteNumber);
console.log(age);
console.log(fullName);
console.log(twocubed);
console.log(rounded);
console.log(roundUp);
console.log(roundDown);



function sayHi(person){
	var greeting = 'Hello ' + person;
	console.log(greeting);
}

sayHi('Terminator');
sayHi('fluffy');

function addTwoNumbers(x, y){
	console.log(x, y);
}
addTwoNumbers(2,3);