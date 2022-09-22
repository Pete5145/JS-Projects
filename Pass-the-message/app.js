// Variables

const btn = document.querySelector("button");
const message = document.querySelector("#message");
const userInput = document.querySelector("#msg-input");
const errorMsg = document.querySelector(".feedback");

// Event Listener
btn.addEventListener("click", passMessage);
document.addEventListener("DOMContentLoaded", () => {
  message.innerText = localStorage.getItem("Message");
});

//local storage
if (!localStorage.getItem("Message")) {
  localStorage.setItem("Message", "Do This Project!");
}
// Event Handler
function passMessage() {
  if (userInput.value === "") {
    errorMsg.classList.add("error");
    setTimeout(() => {
      errorMsg.classList.remove("error");
    }, 2000);
  } else {
    let inputVal = userInput.value;
    localStorage.setItem("Message", inputVal);
    message.innerText = localStorage.getItem("Message");
    userInput.value = "";
  }
}
