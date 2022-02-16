// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Is this thing on?")
  var characters = prompt("How many characters?")
  if (characters >= 8 && characters <= 128) {
    console.log("This is working.")
    var wantLowerCase = prompt("Would you like to include lowercase letters?")
    if (wantLowerCase === "Yes" || "Y") {
      console.log("yes")
      var wantUpperCase = prompt("Would you like to include uppercase letters?")
      if (wantUpperCase === "Yes" || "Y") {
        var wantNumeric = prompt("Would you like to include numeric values?")
      }
    }
  } else {
    alert("Password length must be at least 8 characters, and no more 128 characters. Please try again.")
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
