// Variables
const button = document.querySelector("button");
const hexValue = document.querySelector("#hex-value");
const copyBtn = document.querySelector("#copy");

// Event Listeners
button.addEventListener("click", () => {
  const hex = "#" + Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = hex;
  hexValue.value = hex;
});

copyBtn.addEventListener("click", () => {
  hexValue.select();
  document.execCommand("copy");
});
