let lastNum;
let num1 = "";
let num2 = "";
let operator = null;
const display = document.querySelector(".calculator-display");
console.log(display);

//button to CalDisplay,
const addNumber = (num) => {
  if (num1 === "") {
    num1 = num;
    display.innerHTML = `${num1}`;
  }
  else {
    num1 = `${num1}${num}`;
    display.innerHTML = `${num1}`;
  }
};

//Function addNum to operator
const addToOperator = () => {
  operator = num1;
};

//Function plus
const buttonPlus = (num1, num2) => {
  lastNum = num1 + num2;
  return addNumber(lastNum);
};

//Function minus
const buttonMinus = (num1, num2) => {
  lastNum = num1 - num2;
  return addNumber(lastNum);
};

//Function multiply
const buttonMultiply = (num1, num2) => {
  lastNum = num1 * num2;
};

//Function divide
const buttonDivide = (num1, num2) => {
  lastNum = num1 / num2;
};

//Function reset
const buttonReset = () => {
  num1 = "";
  num2 = "";
  addNumber();
};

//Function equal
const buttonEqual = () => {
  return addNumber(lastNum);
};

//Function Delete
const buttonDelete = () => {};

//burasd