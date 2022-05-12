// Assignment code here
var characterCount
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
var alphabetUpper = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
];
var numbers = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"
];
var special = [
"!",
"@",
"#",
"$",
"%",
"^",
"&",
"*",
"(",
")"
]; 

function generatePassword(){
  var characterCount = window.prompt("Let's get you a fancy new password!  Please choose between 8 and 128 characters.");
  if (characterCount > 128) {
    var characterCount = prompt("Please try again.  Cannot exceed 128 characters.")
    generatePassword();
  } else if (characterCount < 8) {
    var characterCount = prompt("Please try again.  Must have more than 8 characters")
    generatePassword();
  }
  console.log(characterCount)
  
  
  var alphabetLower = window.prompt("Lowercase Letters? YES or NO")
  alphabetLower = alphabetLower.toUpperCase();

  if (alphabetLower == "YES") {

  } else {
    
  };
  console.log(alphabetLower);
  var alphabetUpper = window.prompt("Uppercase Letters? YES or NO")
  alphabetUpper = alphabetUpper.toUpperCase();
  if (alphabetUpper == "YES") {

  } else {
    
  };
  console.log(alphabetUpper);
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
  return;



};


//gonna try to make a loop to generate this code
var min = 8;
var max = 128;
var length = characterCount;
var securedPassword = "";
for (let i = 0; n = characterCount.length; i , length); ++i; {
    securedPassword += characterCount.charAt(Math.floor(Math.random() * n));
    }
    return securedPassword;



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

