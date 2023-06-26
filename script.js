// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Start Functions
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate the password
function generatePassword() {
  do {
    var passLength = parseInt(prompt('Please enter the desired password length from 8 to 128:')) || 0;
    var validLength = validateInputNumber(passLength);
    
  }
  while (validLength === false);
}

//Validate the user input to ensure that only numbers within the allowed values are passed are passed.
function validateInputNumber(passLength) {
  var alertText = "You must enter a valid number between 8 and 128.  Please try again";
  console.log(passLength);
  if (passLength < 8 || passLength > 128) {
    alert (alertText);
    return false;
  } else {
    return true;
  }  
}

