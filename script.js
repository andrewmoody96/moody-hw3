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

function generatePassword () {
  var wantsLowerCase = confirm("Would you like to include lowercase letters?")
    if (wantsLowerCase === true){
      // Generates a single lower case. -- Need this to loop depending on passwordLength.length
      var randomLower = possibleChar.lowerCase[Math.floor(Math.random() * possibleChar.lowerCase.length)];
      console.log(randomLower);
    } else {
      console.log("Lowercase?: No")
      wantsLowerCase = false;
    }
    // Rinse and repeat process for each password criteria.
   
  return(password);
}



// Need to loop this function based on passwordLength.length and concatenate the values of randomLower, randomUpper, randomNumeric, & randomSpecial. The result should be the same length as the selected amount of characters.  




// Write password to the #password input
function writePassword() {
  console.log("Click event works.")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
