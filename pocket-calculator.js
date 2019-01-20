var string = "";
var operation = 0;
var decimalPoint = false;
var symbol = false;
var error = false;
var number = ""



function clearAll() {
  string = "";
  operation = 0;
  document.getElementById("display").innerHTML = "0"
  decimalPoint = false;
  symbol = false;
  error = false;
  number = ""

}

function num(num) {

  if (error == false) {
    let testNumber = number.toString().length
    if (testNumber < 9)
    number += num
    document.getElementById("display").innerHTML = Number(number).toLocaleString();
    }

}


function decimal(dec) {

  if (error == false) {

  if (decimalPoint == false) {
    if (number == "") {
      number = 0
    }
     number += '.';
     document.getElementById('display').innerHTML = Number(number).toLocaleString() + ".";
     decimalPoint = true;
}
  else {
    return;
  }

}
}


function setFunc(command) {

if (error == false) {

if (command == 0) {
  return;
  }

  if (command == "add") {
  if (number == "") {
    number = 0
  }
  string += number + "+";
  symbol = true
  decimalPoint = false
  number = ""
  document.getElementById("display").innerHTML = "+"
  }
else if (command == "subtract") {
  if (symbol == false) {
    string = string.slice(0,string.length - 1)
  }
  if (number == "") {
    number = 0
  }
  string += number + "-";
  symbol = true
  decimalPoint = false
  number = ""
  document.getElementById("display").innerHTML = "-"
  }
else if (command == "multiply") {
  if (symbol == false) {
    string = string.slice(0,string.length - 1)
  }
  if (number == "") {
    number = 0
  }
  string += number + "*";
  symbol = true
  decimalPoint = false
  number = ""
  document.getElementById("display").innerHTML = "x"
  }
else if (command == "divide") {
  if (symbol == false) {
    string = string.slice(0,string.length - 1)
  }
  if (number == "") {
    number = 0
  }
  string += number + "/";
  symbol = true
  decimalPoint = false
  number = ""
  document.getElementById("display").innerHTML = "/"
  }
else if (command == "percentage") {
  if (symbol == false) {
    string = string.slice(0,string.length - 1)
  }
  if (number == "") {
    number = 0
  }
  string += number + "/100"
  number = ""
  decimalPoint = false
  document.getElementById("display").innerHTML = "%"
}
else if (command == "signchange") {
  if (symbol == false) {
    string = string.slice(0,string.length - 1)
  }
  if (number == "") {
    number = 0
  }
  string += number + "*-1"
  number = ""
  decimalPoint = false
  document.getElementById("display").innerHTML = "±"
}

}
}



function answer() {
  if (number == '0') {
    string += "0"
  }
  else {
    string += number
  }
  if (error == false) {

  let finalCalculation = eval(string)
  if (finalCalculation == Infinity) {
    document.getElementById("display").innerHTML = "Error"
    error = true
  }
  else if (finalCalculation >= 1000000000) {
    let exponent = finalCalculation.toString().length-1;
    document.getElementById('display').innerHTML = finalCalculation / (10 ** (exponent)) + 'e' + exponent;;
    }
    else {
      document.getElementById('display').innerHTML = finalCalculation.toLocaleString();
  }
  number = finalCalculation
}



operation = 0;
queuedOperation = 0;
displayNum = "";
storedNum = "";

}
