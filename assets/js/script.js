//Function: to generate a random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function: to generate the characterBase
function generateCodeBase() {
  //UpperCase
  var pwBase = "";
  while (pwBase === "") {
    if (window.confirm("Do you want to contain uppercase?")) {
      pwBase += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    //lowerCase
    if (window.confirm("Do you want to contain lowercase?")) {
      pwBase += "abcdefghijklmnopqrstuvwxyz";
    }
    //Special
    if (window.confirm("Do you want to contain special characters?")) {
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

//Main Function: to generate pw
function generatePassword() {
  //determine pw length
  var num = 0;
  num = prompt("How many digits of the password would you like to create? Please enter a number between 8 and 128");
  // num has to be positive interger between 8~128
  var r = /^\+?[1-9][0-9]*$/;
  if (!r.test(num) || num < 8 || num > 128) {
    alert("You entered an invalid value");
    generatePassword();
  }

  // generate CodeBase
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
