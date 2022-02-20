// Assignment Code

// Global variables
var generateBtn = document.querySelector("#generate");
var wantsUpperCase = true;
var wantsLowerCase = true;
var wantsNumeric = true;
var wantsSpecial = true;
var password = "I don't know what I'm doing wrong.";  

// Object containing all available characters. Each property contains a different type of character.
const possibleChar = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!\"#$%&'()*+,-./:;<=>?@\[\\]^_`{|}~"
}
// Object that will populate based on selected criteria in generatePassword()
let selectedCriteria = [];


// if boolean = true, push that set of characters to an array. 
// Shuffle array to truly randomize.



// Need to loop this function based on passwordLength.length and concatenate the values of randomLower, randomUpper, randomNumeric, & randomSpecial. The result should be the same length as the selected amount of characters.  



function generatePassword() {
  var wantsLowerCase = confirm("Would you like to include lowercase letters?")
  // this is setup solely for Lower Case. Need to add to build upon array depending on user choice for individual parameters.
    if (wantsLowerCase = true) {
      selectedCriteria = [...possibleChar.lowerCase, ...possibleChar.upperCase, ...possibleChar.numeric, ...possibleChar.special]
    }
  var wantsUpperCase = confirm("Would you like to include uppercase letters?")
    // if (wantsUpperCase = true) {
    //   selectedCriteria = [...possibleChar.upperCase]
    // }
  var wantsNumeric = confirm("Would you like to include numeric characters?")
  var wantsSpecial = confirm("Would you like to include special characters?")


    console.log(selectedCriteria);
  }

// Write password to the #password input
function writePassword() {
  console.log("Click event works.")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 