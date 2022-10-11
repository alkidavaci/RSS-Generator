// Assignment Code
var generateBtn = document.querySelector("#generate");

// Series of prompt and confirms for password criteria
var inputLength = window.prompt("How long do you want your password?", "12");

//Added Alerts so the input is number,more than 8 less than 128 characters
var passwordLength = parseInt(inputLength);

if (isNaN(passwordLength)) {
  window.alert("Enter only number!");
  return;
} else if (passwordLength < 8) {
  window.alert("Password is to short! Mu");
} else if (passwordLength > 128) {
  window.alert("Password is to long!");
} else {
  window.alert("This is a valid number");
}

//Input for the type of characters included
var inputIncludesNumbers = window.confirm("Would you like to include numbers to your password?")
var inputIncludesLowercase = window.confirm("Would you like to include Lowercase to your password?")
var inputIncludesUppercase = window.confirm("Would you like to include Uppercase to your password?")
var inputIncludesSpecialCharacter = window.confirm("Would you like to include SpecialCharacter to your password?")

// Condition for password validation
if (!(inputIncludesNumbers || inputIncludesLowercase || inputIncludesUppercase || inputIncludesSpecialCharacter)) {
  window.alert("At least one character type should be selected");
  return;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
