const text = document.querySelector("#text");
const words = "I Love Programming";

setInterval(writeText, 100);

let idx = 1;
function writeText() {
  text.innerText = words.slice(0, idx);
  idx++;

  if (idx > words.length) {
    idx = 1;
  }
}
