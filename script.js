// Assignment Code
var generateBtn = document.querySelector("#generate");

// Series of prompt and confirms for password criteria
var inputLength = window.prompt("How long do you want your password?", "12");
var inputIncludesNumbers = window.confirm("Would you like to include numbers to your password?")
var inputIncludesLowercase = window.confirm("Would you like to include Lowercase to your password?")
var inputIncludesUppercase = window.confirm("Would you like to include Uppercase to your password?")
var inputIncludesSpecialCharacter = window.confirm("Would you like to include SpecialCharacter to your password?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
