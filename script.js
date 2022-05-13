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
var lower = "abcdefghijklmnopqrstuvwxyz";
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890"
var special = "!@#$%^&*()"; 

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

