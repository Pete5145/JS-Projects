const day = document.querySelector("#day");

let days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

window.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  day.innerHTML = days[dayOfWeek];

  //Get and set a random hex color.
  setInterval(() => {
    const hex = Math.random().toString(16).slice(2, 8);
    day.style.color = "#" + hex;
  }, 1000);
});
