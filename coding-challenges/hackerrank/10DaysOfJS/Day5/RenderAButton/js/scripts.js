const buttonTarget = document.getElementById("btn5");
let buttonText = [1, 2, 3, 6, 9, 8, 7, 4];

const handleIncrement = () => {
  buttonText.unshift(buttonText.pop());
  console.log(buttonText);
  document.getElementById("btn1").innerText =
    buttonText[0].toString();
  document.getElementById("btn2").innerText =
    buttonText[1].toString();
  document.getElementById("btn3").innerText =
    buttonText[2].toString();
  document.getElementById("btn6").innerText =
    buttonText[3].toString();
  document.getElementById("btn4").innerText =
    buttonText[7].toString();
  document.getElementById("btn7").innerText =
    buttonText[6].toString();
  document.getElementById("btn8").innerText =
    buttonText[5].toString();
  document.getElementById("btn9").innerText =
    buttonText[4].toString();
};

// Add click event to buttons
buttonTarget.addEventListener("click", handleIncrement);
