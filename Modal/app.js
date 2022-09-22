// Variables
const btn = document.querySelector("button");
const closeBtn = document.querySelector("#close-btn");
const modalContainer = document.querySelector(".modal-container");

// Event Listeners
btn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
