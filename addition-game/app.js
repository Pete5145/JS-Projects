// Select all elements of interest
const primary = document.querySelector("#primary-number");
const secondary = document.querySelector("#secondary-number");
const inputs = document.querySelectorAll(".input-num");
const guessInput = document.querySelector("#guess");
const checkBtn = document.querySelector("#check");
const scoreInfo = document.querySelector("#score");
const remark = document.querySelector("#info");

// Initialize Variables
let score = 0;

// Event Listener
checkBtn.addEventListener("click", checkNumber);

scoreInfo.childNodes[1].textContent = localStorage.getItem("score");
scoreInfo.style.margin = "auto";
score = localStorage.getItem("score");

primary.innerText = random();
secondary.innerText = random();

// Event Handler
function checkNumber() {
  let primaryNumber = +primary.innerText;
  let secondaryNumber = +secondary.innerText;
  let result = primaryNumber + secondaryNumber;
  const guess = +guessInput.value;

  if (guess !== result || isNaN(guess) || guessInput.value === "") {
    remark.innerText = "INCORRECT!";
    remark.style.color = "red";
    scoreInfo.style.display = "none";
    remark.style.margin = "0 auto";
  } else if (guess === result) {
    remark.innerText = "CORRECT!";
    remark.style.color = "green";
    score = ++score;
    localStorage.setItem("score", score);
    scoreInfo.childNodes[1].textContent = localStorage.getItem("score");
  }
  guessInput.value = "";
  primary.innerText = random();
  secondary.innerText = random();
}

function random() {
  return Math.floor(Math.random() * 20);
}
