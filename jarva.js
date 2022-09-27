let num1 = "";
let num2 = "";
let operator = "";
let curOp = "";
let displayNum = "";
const display = document.querySelector(".calculator-display");

// updateDisplay
function updateDisplay() {
  display.innerHTML = displayNum;
}

//addNumber onclick
const addNumber = (num) => {
  displayNum += num;
  updateDisplay();
};

//Function operation
const operation = (op) => {
  num1 = !num1 ? Number(displayNum) : num1;
  //User re-click operation function
  if (curOp === op && !num2) {
    buttonEqual();
  } else {
    displayNum = "";
  }
  curOp = op;
  console.log(num2)
};

//Function reset
const buttonReset = () => {
  num1 = "";
  num2 = "";
  displayNum = "";
  curOp = "";
  operator = "";
  updateDisplay();
};

//Function equal
const buttonEqual = () => {
  num2 = !num2 ? Number(displayNum) : num2;

  switch (curOp) {
    case "plus":
      operator = num1 + num2;
      displayNum = operator;
      break;
    case "minus":
      operator = num1 - num2;
      displayNum = operator;
      break;
    case "divide":
      operator = num1 / num2;
      displayNum = operator;
      break;
    case "multiply":
      operator = num1 * num2;
      displayNum = operator;
      break;
    default:
      break;
  }
  console.log(num1, num2, operator);
  num1 = Number(displayNum);
  updateDisplay();
};

//Function Delete

const buttonDelete = () => {
  if (curOp === "") {
    displayNum = displayNum.toString();
    delNum = displayNum.slice(0, -1);
    displayNum = delNum;
    console.log(typeof displayNum);
  } else {
    curOp = "";
    operator = "";
    num1 = Number(displayNum);
  }
  updateDisplay();
};
