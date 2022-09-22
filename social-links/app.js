const shareBtn = document.querySelector("#share");
const socials = document.querySelector(".socials");
const cancelBtn = document.querySelector(".cancel");

shareBtn.addEventListener("click", () => {
  shareBtn.style.display = "none";
  socials.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  shareBtn.style.display = "block";
  socials.style.display = "none";
});
