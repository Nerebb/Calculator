let num1 = "";
let num2 = "";
let operator = "";
let switchNum = 1;
const display = document.querySelector(".calculator-display");

//button to CalDisplay, switch = 1 add to num1, switch = 2 add to num2
const addNumber = (num) => {
  if ((num1 === "") && (switchNum === 1)) {
    num1 = num;
    display.innerHTML = `${num1}`;
  } else if ((num1 != "") && (switchNum === 1)) {
    num1 = `${num1}${num}`;
    display.innerHTML = `${num1}`;
  } else if ((num2 === "") && (switchNum === 2)) {
    num2 = num;
    display.innerHTML = `${num2}`;
  } else if ((num2 != "") && (switchNum === 2)) {
    num2 = `${num2}${num}`;
    display.innerHTML = `${num2}`;
  }
};

//Function plus
const buttonPlus = () => {
  switchNum = 2;
  operator = "plus";
  if (num2 != "") {
    num1 = parseInt(num1) + parseInt(num2);
    return (display.innerHTML = `${num1}`);
  }
};

//Function minus
const buttonMinus = () => {
  switchNum = 2;
  operator = "minus";
  if (num2 != "") {
    num1 = parseInt(num1) - parseInt(num2);
    return (display.innerHTML = `${num1}`);
  }
};

//Function multiply
const buttonMultiply = () => {
  switchNum = 2;
  operator = "multiply";
  if (num2 != "") {
    num1 = parseInt(num1) * parseInt(num2);
    return (display.innerHTML = `${num1}`);
  }
};

//Function divide
const buttonDivide = (num1, num2) => {
  switchNum = 2;
  operator = "divide";
  if (num2 != "") {
    num1 = parseInt(num1) / parseInt(num2);
    return (display.innerHTML = `${num1}`);
  }
};

//Function reset
const buttonReset = () => {
  operator = "";
  switchNum = 1;
  num1 = "";
  num2 = "";
  lastNum = "";
  display.innerHTML = "";
};

//Function equal
const buttonEqual = () => {
  switchNum = 1;
  if ((operator === "plus")) {
    buttonPlus();
  } else if ((operator === "minus")) {
    buttonMinus();
  } else if ((operator === "multiply")) {
    buttonMultiply();
  } else if ((operator === "divide")) {
    buttonDivide();
  } else {
    operator = "";
    display.innerHTML = `${num1}`;
  }
};

//Function Delete
const buttonDelete = () => {
  if (operator != "") {
    num2 = "";
    switchNum = 1;
    operator = "";
    display.innerHTML = `${num1}`;
  } else {

  }
};
