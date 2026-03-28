const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/create-order", (req, res) => {
  const { deliveryType } = req.body;

  let itemTotal = 250;
  let deliveryFee = 30;
  let doorstepFee = deliveryType === "doorstep" ? 20 : 0;
  let partnerBonus = deliveryType === "doorstep" ? 15 : 0;

  const total = itemTotal + deliveryFee + doorstepFee;

  res.json({
    total,
    partnerBonus
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));