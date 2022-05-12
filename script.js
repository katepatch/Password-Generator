// Assignment code here
var count = ""
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 


function generatePassword(){
  var count = window.prompt("Let's get you a fancy new password!  Please choose between 8 and 128 characters.");
  if (count > 128) {
    var count = prompt("Please try again.  Cannot exceed 128 characters.")
    generatePassword();
  } else if (count < 8) {
    var count = prompt("Please try again.  Must have more than 8 characters")
    generatePassword();
  }
  console.log(count)
  
  
  var lower = window.prompt("Lowercase Letters? YES or NO")
  lower = lower.toUpperCase();

  if (lower == "YES") {

  } else {
    
  };
  console.log(lower);
  var capital = window.prompt("Uppercase Letters? YES or NO")
  capital = capital.toUpperCase();
  if (capital == "YES") {

  } else {
    
  };
  console.log(capital);
  var numbers = window.prompt("Numbers? YES or NO")
  numbers = numbers.toUpperCase();
  if (numbers == "YES") {

  } else {
    
  }
  console.log(numbers);
  var special = window.prompt("Special Characters? YES or NO")
  special = special.toUpperCase();
    if (special == "YES"){
  } else {
  };
  console.log(special)


};

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
//gonna try to make a loop to generate this code
//var min = 8;
//var max = 128;
//var length = characterCount;
//var passwordText = "";
//for ( var i = 0; n = characterCount.length; i , length); ++i; {
  //  String.fromCharCode(Math.floor(Math.random() * n));
    //}
    



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

