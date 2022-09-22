const timer = document.querySelector("#timer");

setInterval(() => {
  const date = new Date();
  timer.innerText = date.toLocaleTimeString();
}, 1000);
