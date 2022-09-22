const dropBtnOne = document.querySelector("#drop-btn-1");
const dropBtnTwo = document.querySelector("#drop-btn-2");

const dropdownContentOne = document.querySelector("#dropdown-content-one");
const dropdownContentTwo = document.querySelector("#dropdown-content-two");

dropBtnOne.addEventListener("click", (e) => {
  dropdownContentOne.classList.toggle("drop-toggle");
  if (
    e.target.childNodes[1].src ===
    "http://127.0.0.1:5500/images/icon-arrow-down.svg"
  ) {
    e.target.childNodes[1].src = "./images/icon-arrow-up.svg";
  } else {
    e.target.childNodes[1].src = "./images/icon-arrow-down.svg";
  }
});

dropBtnTwo.addEventListener("click", (e) => {
  dropdownContentTwo.classList.toggle("drop-toggle");
  if (
    e.target.childNodes[1].src ===
    "http://127.0.0.1:5500/images/icon-arrow-down.svg"
  ) {
    e.target.childNodes[1].src = "./images/icon-arrow-up.svg";
  } else {
    e.target.childNodes[1].src = "./images/icon-arrow-down.svg";
  }
});
