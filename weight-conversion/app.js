const userInput = document.querySelector("#user-input");
const resultInKg = document.querySelector("#result");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const valueInPounds = +userInput.value;
  const conversion = (valueInPounds * 0.45359237).toFixed(2);
  resultInKg.style.display = "block";
  resultInKg.innerText = conversion;

  if (userInput.value === "") {
    alert("Please enter a value");
    resultInKg.innerText = "";
  }

  if (isNaN(valueInPounds)) {
    alert("Invalid value. try again!");
    resultInKg.innerText = "";
  }

  if (valueInPounds < 0) {
    alert("Enter a value greater than zero");
    resultInKg.innerText = "";
  }
});
InPounds;
