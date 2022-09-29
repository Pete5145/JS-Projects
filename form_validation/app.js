// Select all input elements of interest
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpass = document.querySelector("#confirmpass");
const checkBox = document.querySelector("#agree");
const submitBtn = document.querySelector("#submit");
const lastNameCtrl = document.querySelector(".lastname-box");
const firstNameCtrl = document.querySelector(".firstname-box");
const emailCtrl = document.querySelector(".email-box");
const passwordCtrl = document.querySelector(".password-box");
const confirmpassCtrl = document.querySelector(".confirmpass-box");
const togglePassword = passwordCtrl.querySelector(".toggle");
const toggleConfirmPass = confirmpassCtrl.querySelector(".toggle");

// Select all info texts
const lerrorMsg = lastNameCtrl.querySelector(".error");
const ferrorMsg = firstNameCtrl.querySelector(".error");
const errorMsg = emailCtrl.querySelector(".error");
const perrorMsg = passwordCtrl.querySelector(".error");
const cperrorMsg = confirmpassCtrl.querySelector(".error");

// Info Icons
const fcheckIcon = firstNameCtrl.querySelector(".check-icon");
const fwarningIcon = firstNameCtrl.querySelector(".warning-icon");
const lcheckIcon = lastNameCtrl.querySelector(".check-icon");
const lwarningIcon = lastNameCtrl.querySelector(".warning-icon");
const echeckIcon = emailCtrl.querySelector(".check-icon");
const ewarningIcon = emailCtrl.querySelector(".warning-icon");
const pcheckIcon = passwordCtrl.querySelector(".check-icon");
const pwarningIcon = passwordCtrl.querySelector(".warning-icon");
const cpwarningIcon = confirmpassCtrl.querySelector(".warning-icon");
const cpcheckIcon = confirmpassCtrl.querySelector(".check-icon");

// Event Listeners
firstName.addEventListener("input", validateNames);
lastName.addEventListener("input", validateNames);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmpass.addEventListener("input", validateConfirmPass);
togglePassword.addEventListener("click", togglePasswordIcon);
toggleConfirmPass.addEventListener("click", toggleConfirmPassIcon);

// Event Handlers
function validateNames(e) {
  if (e.target.id === "fname") {
    if (e.target.value.length < 5) {
      fwarningIcon.style.visibility = "visible";
      fcheckIcon.style.visibility = "hidden";
      ferrorMsg.style.display = "block";
      ferrorMsg.innerText = "name is too short";
      e.target.style.borderColor = "red";
    } else {
      fwarningIcon.style.visibility = "hidden";
      ferrorMsg.innerText = "";
      fcheckIcon.style.visibility = "visible";
      e.target.style.borderColor = "green";
    }
  } else if (e.target.id === "lname") {
    if (e.target.value.length < 5) {
      lwarningIcon.style.visibility = "visible";
      lcheckIcon.style.visibility = "hidden";
      lerrorMsg.style.display = "block";
      lerrorMsg.innerText = "name is too short";
      e.target.style.borderColor = "red";
    } else {
      lwarningIcon.style.visibility = "hidden";
      lerrorMsg.innerText = "";
      lcheckIcon.style.visibility = "visible";
      e.target.style.borderColor = "green";
    }
  }
}

// Validate Email;
function validateEmail(e) {
  const pattern = /[a-z0-9]{9,15}\@[a-z]{5}\.[a-z]{2,4}/gi;
  if (pattern.test(e.target.value)) {
    echeckIcon.style.visibility = "visible";
    e.target.style.borderColor = "green";
    errorMsg.style.display = "none";
    ewarningIcon.style.visibility = "hidden";
  } else {
    echeckIcon.style.visibility = "hidden";
    ewarningIcon.style.visibility = "visible";
    e.target.style.borderColor = "red";
    errorMsg.style.display = "block";
    errorMsg.innerText = "Please enter a valid address";
  }
}

function togglePasswordIcon() {
  const type1 = password.getAttribute("type");
  type1 === "password"
    ? password.setAttribute("type", "text")
    : password.setAttribute("type", "password");

  this.classList.toggle("fa-eye");
}

function toggleConfirmPassIcon() {
  const type2 = confirmpass.getAttribute("type");
  type2 === "password"
    ? confirmpass.setAttribute("type", "text")
    : confirmpass.setAttribute("type", "password");
}

function validatePassword() {
  if (this.value.length < 8) {
    perrorMsg.style.display = "block";
    perrorMsg.innerText = "Password must be at 8 characters";
    this.style.borderColor = "red";
  } else {
    perrorMsg.style.display = "none";
    this.style.borderColor = "green";
  }
}

function validateConfirmPass() {
  if (this.value !== password.value) {
    cperrorMsg.style.display = "block";
    cperrorMsg.innerText = "passwords don't match";
    this.style.borderColor = "red";
  } else {
    cperrorMsg.style.display = "none";
    this.style.borderColor = "green";
  }
}
