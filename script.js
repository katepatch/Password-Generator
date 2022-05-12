// Assignment code here
var countConfirm
var lowerConfirm
var capitalConfirm
var numbersConfirm
var specialConfirm


function generatePassword(){
  countConfirm = prompt("Let's get you a fancy new password!  Please choose between 8 and 128 characters.");
  if (countConfirm > 7 && countConfirm < 129 && Number(countConfirm) !==Nan){

    lowerConfirm = confirm("Do you want lower case letters?");
    capitalConfirm = confirm("Do you want capital letters?");
    numbersConfirm = confirm("Do you want numbers?");
    specialConfirm = confirm("Do you want special characters?");

    if(lowerConfirm != false || capitalConfirm != false || numbersConfirm != false || specialConfirm != false)
      
      if (lowerConfirm == false){
        var lowerConfirm = "No";
      } else {
        lowerConfirm = "Yes";
      }
      console.log(lowerConfirm)
      if (capitalConfirm == false){
        var capitalConfirm = "No";
      } else {
        capitalConfirm = "Yes"
      }
      console.log(capitalConfirm);
      if (numbersConfirm == false){
        var numbersConfirm = "No";
      } else {
        numbersConfirm = "Yes";
      }
      console.log (numbersConfirm)
      if (specialConfirm == false){
        var specialConfirm = "No"
      } else {
        specialConfirm = "Yes"
      }
      console.log(specialConfirm)
  }
}

var count = ""
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 
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

