document.addEventListener("DOMContentLoaded", function () {
  // JavaScript variables
  var firstNum = document.getElementById("firstNum");
  var secondNum = document.getElementById("secondNum");
  var operator = "";
  var result = "";
  var equal = " = ";

  // JavaScript function to handle form submission
  document
    .getElementById("calculator")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get the operator value
      var operatorButtons = document.getElementsByName("operator");
      operatorButtons.forEach(function (button) {
        if (button.type === "submit" && button.clicked) {
          operator = button.value;
        }
      });

      // Perform calculations
      if (secondNum.value === "0" && operator === "/") {
        result = " Don't divide by 0 ";
      } else if (!isNaN(firstNum.value) && !isNaN(secondNum.value)) {
        switch (operator) {
          case "+":
            result = parseFloat(firstNum.value) + parseFloat(secondNum.value);
            break;
          case "-":
            result = parseFloat(firstNum.value) - parseFloat(secondNum.value);
            break;
          case "*":
            result = parseFloat(firstNum.value) * parseFloat(secondNum.value);
            break;
          case "/":
            result = parseFloat(firstNum.value) / parseFloat(secondNum.value);
            break;
          case "reset":
            firstNum.value = "";
            operator = "";
            secondNum.value = "";
            result = "";
            equal = " = ";
            break;
        }
      }

      // Display result
      document.getElementById("result").value = result;

      // Update calculatorLog
      var calculatorLog =
        firstNum.value +
        " " +
        operator +
        " " +
        secondNum.value +
        equal +
        result +
        "\n";
      document.getElementById("calculatorLog").value += calculatorLog;

      // Save to calculatorLog.txt (you may need to handle this on the server-side)
      // For simplicity, I'm displaying it in the textarea
      var fileToOpen = document.getElementById("fileToOpen");
      fileToOpen.value = calculatorLog + fileToOpen.value;
    });

  // Update operatorButtons to mark the clicked button
  var operatorButtons = document.getElementsByName("operator");
  operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      operatorButtons.forEach(function (btn) {
        btn.clicked = false;
      });
      button.clicked = true;
    });
  });
});
