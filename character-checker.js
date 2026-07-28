const input = require('readline-sync');

let characterString = "Web Development is fun";
let indexNumber = input.question("Please choose a number to find the character at that index: "); //Asking user to select a character to locate the index at that number


let indexCharacter = characterString[indexNumber]; //Getting the number from the user(indexNumber) and searching the string(CharacterString) to get the character.
console.log("You chose number: " + indexNumber + ". " + "The index character in that index number is: " + indexCharacter); //Printing out the users choice and the character at that index

