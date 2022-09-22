const btns = document.querySelectorAll(".circle");
const colors = [...btns];
const body = document.querySelector("body");

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
    if (e.target.id === "blue") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
