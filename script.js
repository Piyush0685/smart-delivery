let deliveryType = "gate";

function selectType(type) {
  deliveryType = type;

  document.getElementById("gateOption").classList.remove("selected");
  document.getElementById("doorOption").classList.remove("selected");

  if (type === "gate") {
    document.getElementById("gateOption").classList.add("selected");
  } else {
    document.getElementById("doorOption").classList.add("selected");
  }

  updateTotal();
}

function updateTotal() {
  let total = 250 + 30;

  if (deliveryType === "doorstep") {
    total += 20;
    document.getElementById("doorstepRow").innerHTML =
      "<span>Doorstep Fee</span><span>₹20</span>";
  } else {
    document.getElementById("doorstepRow").innerHTML = "";
  }

  document.getElementById("total").innerText = total;
  document.getElementById("btnText").innerText = "Pay ₹" + total;
}

function placeOrder() {
  const btnText = document.getElementById("btnText");
  const loader = document.getElementById("loader");

  btnText.innerText = "Processing...";
  loader.style.display = "inline-block";

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("successModal").style.display = "flex";
    btnText.innerText = "Pay ₹" + document.getElementById("total").innerText;
  }, 1200);
}

function closeModal() {
  document.getElementById("successModal").style.display = "none";
}

selectType("gate");