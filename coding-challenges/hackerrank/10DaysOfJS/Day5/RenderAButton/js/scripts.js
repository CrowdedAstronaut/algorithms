let buttonTarget = document.getElementById("btn5");
let I = 4;
let arrayA = [1, 2, 3, 6, 9, 8, 7, 4];
let arrayB = [1, 2, 3, 6, 9, 8, 7, 4];

const rotate = () => {
  for (let i = 7; i > 0; i--) {
    arrayA[i] = arrayA[i - 1];
  }
  arrayA[0] = I;
  I = arrayA[7];
  for (let i = 0; i < 8; i++) {
    document.getElementById(`btn${arrayB[i]}`).innerText = arrayA[i];
  }
};

let buttonText = [1, 2, 3, 6, 9, 8, 7, 4];

// const handleIncrement = () => {
//   buttonText.unshift(buttonText.pop());
//   console.log(buttonText);
//   document.getElementById("btn1").innerText = buttonText[0].toString();
//   document.getElementById("btn2").innerText = buttonText[1].toString();
//   document.getElementById("btn3").innerText = buttonText[2].toString();
//   document.getElementById("btn6").innerText = buttonText[3].toString();
//   document.getElementById("btn4").innerText = buttonText[7].toString();
//   document.getElementById("btn7").innerText = buttonText[6].toString();
//   document.getElementById("btn8").innerText = buttonText[5].toString();
//   document.getElementById("btn9").innerText = buttonText[4].toString();
// };

// Add click event to buttons
buttonTarget.addEventListener("click", rotate);
