const input = document.querySelector("textarea");
const result = document.querySelector(".result");
const wordOutput = document.querySelector(".words");
const characterOutput = document.querySelector(".characters");
const spaceOutput = document.querySelector(".spaces");

input.addEventListener("input", (e) => {
  const inputValue = input.value;
  const words = inputValue.match(/\w+/gi);
  wordOutput.childNodes[0].textContent = words.length;
  result.style.display = "block";
  characterOutput.childNodes[0].textContent = inputValue.length;
  const spaces = inputValue.match(/\s+/g);
  spaceOutput.childNodes[0].textContent = spaces.length;
});
