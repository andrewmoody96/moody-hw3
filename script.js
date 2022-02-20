// Assignment Code

// Global variables
var generateBtn = document.querySelector("#generate");
var password = "I don't know what I'm doing wrong.";

const criteriaOptions = {
  wantsUpperCase: false,
  wantsLowerCase: false,
  wantsNumeric: false,
  wantsSpecial: false,
};

// Object containing all available characters. Each property contains a different type of character.
const possibleChar = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};
// Object that will populate based on selected criteria in generatePassword()
let selectedCriteria = [];

// if boolean = true, push that set of characters to an array.
// Shuffle array to truly randomize.

// Need to loop this function based on passwordLength.length and concatenate the values of randomLower, randomUpper, randomNumeric, & randomSpecial. The result should be the same length as the selected amount of characters.

function generatePassword() {
  var wantsLowerCase = confirm("Would you like to include lowercase letters?");
  var wantsUpperCase = confirm("Would you like to include uppercase letters?");
  var wantsNumeric = confirm("Would you like to include numeric characters?");
  var wantsSpecial = confirm("Would you like to include special characters?");
  // TTTT
  if (
    wantsLowerCase == true &&
    wantsUpperCase == true &&
    wantsNumeric == true &&
    wantsSpecial == true
  ) {
    selectedCriteria = [
      ...possibleChar.lowerCase,
      ...possibleChar.upperCase,
      ...possibleChar.numeric,
      ...possibleChar.special,
    ];
  }
  // Listed all combinations of criteria. Update selectedCriteria accordingly
  // TFTT
  if (
    wantsLowerCase == true &&
    wantsUpperCase == false &&
    wantsNumeric == true &&
    wantsSpecial == true
  ) {
    selectedCriteria = [
      ...possibleChar.lowerCase,
      ...possibleChar.numeric,
      ...possibleChar.special,
    ];
  }
  // TTFT
  if (
    wantsLowerCase == true &&
    wantsUpperCase == true &&
    wantsNumeric == false &&
    wantsSpecial == true
  ) {
    selectedCriteria = [
      ...possibleChar.lowerCase,
      ...possibleChar.upperCase,
      ...possibleChar.special,
    ];
  }
  // TFFT
  if (
    wantsLowerCase == true &&
    wantsUpperCase == false &&
    wantsNumeric == false &&
    wantsSpecial == true
  ) {
    selectedCriteria = [...possibleChar.lowerCase, ...possibleChar.special];
  }
  // TTTF
  if (
    wantsLowerCase == true &&
    wantsUpperCase == true &&
    wantsNumeric == true &&
    wantsSpecial == false
  ) {
    selectedCriteria = [
      ...possibleChar.lowerCase,
      ...possibleChar.upperCase,
      ...possibleChar.numeric,
    ];
  }
  // TFTF
  if (
    wantsLowerCase == true &&
    wantsUpperCase == false &&
    wantsNumeric == true &&
    wantsSpecial == false
  ) {
    selectedCriteria = [...possibleChar.lowerCase, ...possibleChar.numeric];
  }
  // TTFF
  if (
    wantsLowerCase == true &&
    wantsUpperCase == true &&
    wantsNumeric == false &&
    wantsSpecial == false
  ) {
    selectedCriteria = [...possibleChar.lowerCase, ...possibleChar.upperCase];
  }
  // TFFF
  if (
    wantsLowerCase == true &&
    wantsUpperCase == false &&
    wantsNumeric == false &&
    wantsSpecial == false
  ) {
    selectedCriteria = [...possibleChar.lowerCase];
  }
  // FTTT
  if (
    wantsLowerCase == false &&
    wantsUpperCase == true &&
    wantsNumeric == true &&
    wantsSpecial == false
  ) {
    selectedCriteria = [
      ...possibleChar.upperCase,
      ...possibleChar.numeric,
      ...possibleChar.special,
    ];
  }
  // FFTT
  if (
    wantsLowerCase == false &&
    wantsUpperCase == false &&
    wantsNumeric == true &&
    wantsSpecial == false
  ) {
    selectedCriteria = [...possibleChar.numeric, ...possibleChar.special];
  }
  // FTFT
  if (
    wantsLowerCase == false &&
    wantsUpperCase == true &&
    wantsNumeric == false &&
    wantsSpecial == true
  ) {
    selectedCriteria = [...possibleChar.upperCase, ...possibleChar.special];
  }
  // FFFT
  if (
    wantsLowerCase == false &&
    wantsUpperCase == false &&
    wantsNumeric == false &&
    wantsSpecial == true
  ) {
    selectedCriteria = [...possibleChar.special];
  }
  // FTTF
  if (
    wantsLowerCase == false &&
    wantsUpperCase == true &&
    wantsNumeric == true &&
    wantsSpecial == false
  ) {
    selectedCriteria = [...possibleChar.upperCase, ...possibleChar.numeric];
  }
  // FFTF
  if (
    wantsLowerCase == false &&
    wantsUpperCase == false &&
    wantsNumeric == true &&
    wantsSpecial == false
  ) {
    selectedCriteria = [...possibleChar.numeric];
  }
  // FTFF
  if (
    wantsLowerCase == false &&
    wantsUpperCase == true &&
    wantsNumeric == false &&
    wantsSpecial == false
  ) {
    selectedCriteria = [...possibleChar.upperCase];
  }
  console.log(selectedCriteria);
  // Takes user input and converts the string into an integer.
  var characterLength = prompt("How many characters? Choose 8-128");
  console.log(characterLength);
  var integer = Number(characterLength);
  console.log(integer);
}

// Write password to the #password input
function writePassword() {
  console.log("Click event works.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
