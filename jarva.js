let lastNum = "";
let num1 = "";
let num2 = "";
let switchNum = 1;
const display = document.querySelector(".calculator-display");

//button to CalDisplay, switch = 0 add to num1, switch = 1 add to num2
const addNumber = (num) => {
  if (num1 === "" && switchNum === 1) {
    num1 = num;
    display.innerHTML = `${num1}`;
  } else if (num1 != "" && switchNum === 1) {
    num1 = `${num1}${num}`;
    display.innerHTML = `${num1}`;
  } else if (num2 === "" && switchNum === 2) {
    num2 = num;
    display.innerHTML = `${num2}`;
  } else if (num2 != "" && switchNum === 2) {
    num2 = `${num2}${num}`;
    display.innerHTML = `${num2}`;
  }
};

//Function addNum to operator
// const addToOperator = () => {
//   operator = num1;
// };

//Function plus
const buttonPlus = () => {
  switchNum = 2;
  if (num2 != "") {
    operatorNum = parseInt(num1) + parseInt(num2);
    num1 = operatorNum;
    return (display.innerHTML = `${operatorNum}`);
  }
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
  switchNum = 1;
  num1 = "";
  num2 = "";
  lastNum = "";
  display.innerHTML = "";
};

//Function equal
const buttonEqual = () => {
  switchNum = 1;
  operatorNum = num1;
  return (display.innerHTML = `${operatorNum}`);
};

//Function Delete
const buttonDelete = () => {};
