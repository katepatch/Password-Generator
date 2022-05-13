// Assignment code here
var countConfirm
var lowerConfirm
var capitalConfirm
var numbersConfirm
var specialConfirm
var count = ""
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"]; 
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 
var lowerCapital = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerSpecial = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var capitalNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var capitalSpecial = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var numbersSpecial = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var allChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function generatePassword(){
  var countConfirm = window.prompt("Let's get you a fancy new password!  Please choose between 8 and 128 characters.");
  if (countConfirm > 128) {
    var count = prompt("Please try again.  Cannot exceed 128 characters.")
    generatePassword();
  } else if (countConfirm < 8) {
    var countConfirm = prompt("Please try again.  Must have more than 8 characters")
    generatePassword();
  }
  console.log(countConfirm)
   
  var lowerConfirm = confirm("Confirm Lower Case letters?")
  console.log(lowerConfirm);
  
  var capitalConfirm = confirm("Confirm Capital letters?")
  console.log(capitalConfirm);
  
  var numbersConfirm = confirm("Confirm Numbers?")
  console.log(numbersConfirm);
  var specialConfirm = confirm("Confirm Special Characters?")
  console.log(specialConfirm)

  if (lowerConfirm == false && capitalConfirm == false && numbersConfirm == false && specialConfirm == false) {
    alert("You must confirm at least one type of character to proceed")
    generatePassword()
  } else if (lowerConfirm == true && capitalConfirm == false && numbersConfirm == false && specialConfirm == false) {
    var output = ""
    for (var i = 0; i < countConfirm; i++) {
    output += lower[Math.floor(Math.random() * lower.length)]
    console.log(output)
    }
    generatePassword = output;
    return generatePassword;
  } else if (lowerConfirm == false && capitalConfirm == true && numbersConfirm == false & specialConfirm == false){
    var output = ""
    for (var i = 0; i < countConfirm; i++) {
      output += capital[Math.floor(Math.random() * capital.length)]
      console.log(output)
    }
    generatePassword = output;
  } else if(lowerConfirm == false && capitalConfirm == false && numbersConfirm == true & specialConfirm == true){
    var output = ""
    for (var i = 0; i < countConfirm; i++) {
      output += numbers[Math.floor(Math.random() * numbers.length)]
      console.log(output)
    }
    generatePassword = output;
  } else if (lowerConfirm == false && capitalConfirm == false && numbersConfirm == false & specialConfirm == true){
    var output = ""
    for (var i = 0; i < countConfirm; i++) {
      output += special[Math.floor(Math.random() * special.length)]
      console.log(output)
    }
    generatePassword = output;
  } 
  else if (lowerConfirm == true && capitalConfirm == true && numbersConfirm == false & specialConfirm == false){
    var output = ""
    for (var i = 0; i < countConfirm; i++) {
      output += lowerConfirm[Math.floor(Math.random() * lowerCapital.length)]
      console.log(output)
    }
    generatePassword = output;
  }   else if (lowerConfirm == truee && capitalConfirm == false && numbersConfirm == true & specialConfirm == false){
    var output = ""
    for (var i = 0; i < countConfirm; i++) {
      output += lower[Math.floor(Math.random() * lower.length)]
      console.log(output)
    }
    generatePassword = output;
  } 
  
  
  
return generatePassword;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
