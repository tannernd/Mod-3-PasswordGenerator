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
  var criteria = "";
  var passLength;
  var passUpper;  
  var passLower;
  var passSpecial;
  var passNumbers;
  var validLength = false;
  var validYesNo = false;
  var validCriteria = false;

  do {
    //Prompt for password length until a valid number in range is made
    do {
      passLength = parseInt(prompt('Please enter the desired password length from 8 to 128:')) || 0;
      validLength = validateInputNumber(passLength);    
    }
    while (validLength === false);

    //Prompt if password should contain uppercase letters until valid Yes or No is entered
    do {
      passUpper = prompt('Would you like to use uppercase letters? Enter "Y" for Yes or "N" for No:');
      passUpper = passUpper.toLowerCase();
      validYesNo = validInputYesNo(passUpper);    
    }
    while (validYesNo === false);

    //Prompt if password should contain lowercase letters until valid Yes or No is entered
    do {
      passLower = prompt('Would you like to use lowercase letters? Enter "Y" for Yes or "N" for No:');
      passLower = passLower.toLowerCase();
      validYesNo = validInputYesNo(passLower);    
    }
    while (validYesNo === false);

    //Prompt if password should contain special characters until valid Yes or No is entered
    do {
      passSpecial = prompt('Would you like to use special characters? Enter "Y" for Yes or "N" for No:');
      passSpecial = passSpecial.toLowerCase();
      validYesNo = validInputYesNo(passSpecial);    
    }
    while (validYesNo === false); 
    
    //Prompt if password should contain numbers until valid Yes or No is entered
    do {
      passNumbers = prompt('Would you like to use numbers? Enter "Y" for Yes or "N" for No:');
      passNumbers = passNumbers.toLowerCase();
      validYesNo = validInputYesNo(passNumbers);    
    }
    while (validYesNo === false);

    //Check that at least one of the criteria has a "Y" entered
    if(passUpper === "y" || passUpper === "yes") {
      validCriteria = true;
    } else if (passLower === "y" || passLower === "yes") {
      validCriteria = true;
    } else if (passSpecial === "y" || passSpecial === "yes") {
      validCriteria = true;
    } else if (passNumbers === "y" || passNumbers === "yes") {
      validCriteria = true;
    } else {
      alert("You must select at least one critiera.  Please try again.");
      validCriteria = false;
    }
  }
  while (validCriteria === false);
}

//Validate the user input to ensure that only numbers within the allowed values are passed are passed.
function validateInputNumber(passLength) {
  const alertText = "You must enter a valid number between 8 and 128.  Please try again";
  if (passLength < 8 || passLength > 128) {
    alert (alertText);
    return false;
  } else {
    return true;
  }  
}

//Validate the user input to ensure a proper Yes or No response. 
function validInputYesNo(response) {
  const alertText = "Please enter either \"Y\" for Yes or \"N\" for No";
  if (response === "y" || response === "n" || response ==="yes" || response === "no") {
    return true;
  } else {
    alert(alertText);
    return false;
  }

}

