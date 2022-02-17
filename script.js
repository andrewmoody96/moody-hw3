// Assignment Code
var generateBtn = document.querySelector("#generate");

// Object containing all available characters. Each property contains a different type of character.
const possible = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!\"#$%&'()*+,-./:;<=>?@\[\\]^_`{|}~"
}

function generatePassword () {
  var characters = prompt("How many characters?")
  if (characters >= 8 && characters <= 128) {
    console.log("Character count within allowed range.")
  } else {
    alert("Password length must be at least 8 characters, and no more 128 characters. Please try again.")
    return("Try again.")
  }
  var passwordLength = characters;
  console.log(passwordLength);

  var wantLowerCase = confirm("Would you like to include lowercase letters?")
    if (wantLowerCase === true){
      console.log("Lowercase?: Yes")
      var randomLower = Math.floor(Math.random() * possible.lowerCase.length);
      console.log(randomLower);
    } else {
      console.log("Lowercase?: No")
    }
  
  var wantUpperCase = confirm("Would you like to include uppercase letters?")
    if (wantUpperCase === true){
      console.log("Uppercase?: Yes")
    } else {
      console.log("Uppercase?: No")
    }

  var wantNumeric = confirm("Would you like to include numeric values?")
    if (wantNumeric === true){
      console.log("Numeric?: Yes")
    } else {
      console.log("Numeric?: No")
    }

  var wantSpecial = confirm("Would you like to include special characters?")
    if (wantSpecial === true){
      console.log("Special?: Yes")
    } else {
      console.log("Special?: No")
    }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
