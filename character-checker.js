const input = require('readline-sync');

let characterString = "Web Development is fun";
let indexNumber = input.question("Please choose a number to find the character at that index: ");


let indexCharacter = characterString[indexNumber];
console.log("You chose number: " + indexNumber + ". " + "The index character in that index number is: " + indexCharacter);

