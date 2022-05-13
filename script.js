// Assignment code here
var countConfirm
var lowerConfirm
var capitalConfirm
var numbersConfirm
var specialConfirm


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
};



//gonna try to make a loop to generate this code
//var min = 8;
//var max = 128;
  



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var count = ""
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
  var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 

if (lowerConfirm){
  count = count + lower;
}

if (capitalConfirm){
  count = count + capital;
}

if (numbersConfirm) {
  count = count + numbers;
}

if (specialConfirm){
  count = count + special;
}

console.log(count)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

