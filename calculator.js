const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

const num1 = parseFloat(prompt("Please enter the first number:"));
const num2 = parseFloat(prompt("Please enter the second number:"));

let oper = prompt("Please choose the operation (+, -, /, *)");
if (num1 && num2) {
  if (oper === "+") console.log(num1 + num2);
  else if (oper === "-") console.log(num1 - num2);
  else if (oper === "*") console.log(num1 * num2);
  else if (oper === "/") console.log(num1 / num2);
  else console.log("opertaion not valid");
} else console.log("invalid number");
