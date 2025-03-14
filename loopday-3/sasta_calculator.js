let num1 = Number(prompt("Enter you first Number"));
let opeartor = prompt("Enter you Oprator(+,-,*,/)");
let num2 = Number(prompt("Enter you Second Number"));

let result;
if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid Number please Enter your Valid Number");
} else if (!["+", "-", "*", "/"].includes(opeartor)) {
  alert("Please Enter Valid Operator");
}


switch (opeartor) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      alert("cannot divided by zero");
    } else {
      result = num1 / num2;
    }
    break;

  default:
    alert(result !== undefined? "the result is 😎 " + result: "Invalid  Statement 🥲");
}

alert("the result is "+ result)