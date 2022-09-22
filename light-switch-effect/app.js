// Select all elements of interest.
const switchBtn = document.querySelector("#switch");
const bulb = document.querySelector("#bulb");

// Bind switchBtn to an event listener
switchBtn.addEventListener("click", toggleBulb);

// Event Handler
function toggleBulb(e) {
  e.target.classList.toggle("fa-toggle-on");
  if (
    bulb.getAttribute("src") === "images/bulb-off.jpg" &&
    switchBtn.classList.contains("fa-toggle-off")
  ) {
    bulb.setAttribute("src", "images/bulb-on.png");
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
    bulb.setAttribute("src", "images/bulb-off.jpg");
  }
}
