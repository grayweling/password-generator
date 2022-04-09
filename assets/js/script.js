function generatePassword() {
  // variables
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ">", "<"];
  var selectedCharacters = [];

  //check for input
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  } else if(isNaN(passwordLength)) {
    alert("Please enter a number");
    return;
  };

  var hasLowercase = confirm("Do you want lowercase letters in your password?");
  if (hasLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercaseLetters);
  };

  var hasUppercase = confirm("Do you want uppercase letters in your password?");
  if (hasUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercaseLetters);
  }

  var hasNumbers = confirm("Do you want numbers in your password?");
  if (hasNumbers) {
    selectedCharacters = selectedCharacters.concat(numbers);
  }

  var hasSpecialCharacters = confirm("Do you want special characters in your password?");
  if (hasSpecialCharacters) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecialCharacters) {
    alert("You must select at least one character type");
    return;
  }

  // generate password
  var createdPassword = [];
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    createdPassword.push(selectedCharacters[randomIndex]);
  };

  return createdPassword.join("");
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
