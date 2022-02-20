// Assignment Code

// Global variables
var generateBtn = document.querySelector("#generate");
var password = "I don't know what I'm doing wrong.";

// Object containing all available characters. Each property contains a different type of character. Maybe try using charSET instead of creating array? REVIEW THIS
const possibleChar = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Array that will populate based on selected criteria in generatePassword()
var selectedCriteria = [];

// Function that populates Array based on selected criteria. Called by writePassword to pass generatedPassword to #password value.
function generatePassword() {
  var wantsLowerCase = confirm("Would you like to include lowercase letters?");
  var wantsUpperCase = confirm("Would you like to include uppercase letters?");
  var wantsNumeric = confirm("Would you like to include numeric characters?");
  var wantsSpecial = confirm("Would you like to include special characters?");
  // Listed all combinations of criteria. Updates selectedCriteria according to choices. There's got to be a better way, REVIEW THIS.
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
  // FFFF
  // Rudimentary password check. If no criteria is selected, an error message is returned.
  if (
    wantsLowerCase == false &&
    wantsUpperCase == false &&
    wantsNumeric == false &&
    wantsSpecial == false
  ) {
    return "No criteria selected. Please try again.";
  }

  console.log(selectedCriteria);
  // Takes user input and converts the string into an integer.
  var characterLength = prompt("How many characters? Choose 8-128");
  console.log(characterLength);
  var integer = Number(characterLength);
  console.log(integer);
  // Displays error message if minimum length isn't met or if maximum length is exceed.
  if (integer < 8 || integer > 128) {
    alert(
      "Password must be a minimum of 8 characters and no more that 128 characters. Please try again."
    );
    return "Please try again.";
  }

  var generatedPassword = "";

  for (let i = 0; i < integer; i++) {
    // Selects random values from selectedCriteria array.
    var randomValues =
      selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
    // Adds the randomValues to the generatedPassword variable, resulting in a new value for the string.
    generatedPassword += randomValues;
    console.log("Password created.");
  }

  // console.log(generatedPassword);
  return generatedPassword;
}

// Generates password and writes generatedPassword to the #password value.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// When the button is clicked, the writePassword function starts.
generateBtn.addEventListener("click", writePassword);
