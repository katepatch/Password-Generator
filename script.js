// Assignment code here
var alphabetLower = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
];
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
  var passwordLength = window.prompt("Choose between 8-128 characters");
  if (!passwordLength >= 8 || !passwordLength <= 128){
    //generatePassword();
    console.log(passwordLength);
    //return;
  }

  var special = window.prompt("Special Characters? YES or NO")
  

  if (special == "YES"){
  } else {
  };
  var alphabetLower = window.prompt("Lowercase Letters? YES or NO")
  alphabetLower = alphabetLower.toUpperCase();

  if (alphabetLower == "YES") {

  } else {
    
  };
  var alphabetUpper = window.prompt("Uppercase Letters? YES or NO")
  alphabetUpper = alphabetUpper.toUpperCase();
  if (alphabetUpper == "YES") {

  } else {
    
  };
  var numbers = window.prompt("Numbers? YES or NO")
 
  if (numbers == "YES") {

  } else {
    
  }
  return;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var min = 8;
var max = 128;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

