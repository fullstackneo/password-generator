// Assignment code here
//generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//generate the code base
function generateCodeBase() {
  //UpperCase
  var pwBase = "";
  while (pwBase === "") {
    if (window.confirm("Do you want to contain UpperCase?")) {
      pwBase += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    //lowerCase
    if (window.confirm("Do you want to contain lowerCase?")) {
      pwBase += "abcdefghijklmnopqrstuvwxyz";
    }
    //Special
    if (window.confirm("Do you want to contain special letters?")) {
      pwBase += " !#$%&\\\"'()*+,-./:;<=>?@[]^_`{|}~";
    }
    //number
    if (window.confirm("Do you want to contain numbers?")) {
      pwBase += "0123456789";
    }
    if (pwBase === "") {
      alert("You need to include one type!");
    }
  }
  return pwBase;
}

//main function to generate pw
function generatePassword() {
  //determine digit number of pw
  var num = 0;
  num = prompt("How many digits of the password would you like to create?");
  // num has to be positive interger
  var r = /^\+?[1-9][0-9]*$/;
  if (!r.test(num)) {
    alert("You enter an invalid value");
    generatePassword();
  }

  // return CodeBase
  var codeBase = generateCodeBase();

  //generate random code from the codeBase
  var password = "";
  for (let i = 0; i < num; i++) {
    var random = randomNumber(0, codeBase.length - 1);
    password += codeBase.charAt(random);
  }
  return password;
}

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
