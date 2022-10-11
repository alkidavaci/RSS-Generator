// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to create array from ASCII codes
function createArray(low, high) {
  const array = [];
  for (let i = low; i < high; i++) {
    array.push(i)
  }
  return array
}
// Created arrays for each type of characters
var numbersCharacters = createArray(48, 57)
var lowercaseCharacters = createArray(65, 90)
var uppercaseCharacters = createArray(98, 122)
var specialCharacters = createArray(33, 47)

//Function get random value from object
function objCharRandom(obj) {
  const values = Object.values(obj);
  return values[Math.floor(Math.random() * values.length)]
}


// Created the function generatePassword()
function generatePassword(passwordLength, inputIncludesNumbers, inputIncludesLowercase, inputIncludesUppercase, inputIncludesSpecialCharacter) {


  // Series of prompt and confirms for password criteria
  var inputLength = window.prompt("How long do you want your password?", "12");

  //Added Alerts so the input is number,more than 8 and less than 128 characters
  var passwordLength = parseInt(inputLength);

  if (isNaN(passwordLength)) {
    window.alert("Enter only number!");
    return;
  } else if (passwordLength < 8) {
    window.alert("Password is to short! Must be more than 8 and less than 128 characters!");
  } else if (passwordLength > 128) {
    window.alert("Password is to long! Must be more than 8 less and than 128 characters!");
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

  // Put random first characters of password in order Number, Lowercase, Uppercase and Special Characters in an empty array
  const starter = []
  if (inputIncludesNumbers) {
    starter.push(String.fromCharCode(Math.floor(Math.random(numbersCharacters) * 10 + 48)))
  }
  if (inputIncludesLowercase) {
    starter.push(String.fromCharCode(Math.floor(Math.random(lowercaseCharacters) * 26 + 98)))
  }
  if (inputIncludesUppercase) {
    starter.push(String.fromCharCode(Math.floor(Math.random(uppercaseCharacters) * 26 + 65)))
  }
  if (inputIncludesSpecialCharacter) {
    starter.push(String.fromCharCode(Math.floor(Math.random(specialCharacters) * 13 + 33)))
  }

  // Created final array with fist characters in order
  const passwordCharacters = starter.slice(0)

  // 
  for (let i = starter.length - 1; i < passwordLength; i++) {

    var objChar = {}
    // Added property for each condition
    if (inputIncludesNumbers) {
      objChar.numbers = Math.floor(Math.random(numbersCharacters) * 10 + 48)
    }
    if (inputIncludesLowercase) {
      objChar.lower = Math.floor(Math.random(lowercaseCharacters) * 26 + 98)
    }
    if (inputIncludesUppercase) {
      objChar.upper = Math.floor(Math.random(uppercaseCharacters) * 26 + 65)
    }
    if (inputIncludesSpecialCharacter) {
      objChar.special = Math.floor(Math.random(specialCharacters) * 13 + 33)
    }


    const characterCode = objCharRandom(objChar)
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
