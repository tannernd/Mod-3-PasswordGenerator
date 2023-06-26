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
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
  var criteria;
  var passLength;
  var passUpper;  
  var passLower;
  var passSpccial;
  var validLength = false;
  var validYesNo = false;

  //Prompt for password length until a valid number in range is made
  do {
    passLength = parseInt(prompt('Please enter the desired password length from 8 to 128:')) || 0;
    validLength = validateInputNumber(passLength);    
  }
  while (validLength === false);

  //Prompt if password should contain uppercase letters until valid Yes or No is entered
  do {
    passUpper = prompt('Would you like to use Uppercase Letters? Enter "Y" for Yes or "N" for No:');
    passUpper = passUpper.toLowerCase();
    validYesNo = validInputYesNo(passUpper);    
  }
  while (validYesNo === false);

}

//Validate the user input to ensure that only numbers within the allowed values are passed are passed.
function validateInputNumber(passLength) {
  var alertText = "You must enter a valid number between 8 and 128.  Please try again";
  if (passLength < 8 || passLength > 128) {
    alert (alertText);
    return false;
  } else {
    return true;
  }  
}

function validInputYesNo(response) {
  var alertText = "Please enter either \"Y\" for Yes or \"N\" for No";
  if (response === "y" || response === "n" || response ==="yes" || response === "no") {
    return true;
  } else {
    alert(alertText);
    return false;
  }

}

