const bill = document.querySelector("#bill");
const tipPercent = document.querySelector("#tip");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const calculateBtn = document.querySelector("button");

calculateBtn.addEventListener("click", calculateTip);

function calculateTip() {
  if (isNaN(bill.value) || bill.value < 1 || bill.value === null) {
    alert("Please enter a valid Bill amount");
  } else if (
    isNaN(tipPercent.value) ||
    tipPercent.value < 1 ||
    tipPercent.value === null
  ) {
    alert("Please enter a valid Tip Percent");
  } else {
    const tip = (tipPercent.value / 100) * bill.value;
    tipAmount.value = tip.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    totalAmount.value = (tip + Number(bill.value)).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
