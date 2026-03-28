const express = require("express");
const app = express();

// 🔥 THIS LINE FIXES YOUR ISSUE
app.use(express.static("public"));

app.use(express.json());

app.post("/create-order", (req, res) => {
  const { deliveryType } = req.body;

  let total = 250 + 30;

  if (deliveryType === "doorstep") {
    total += 20;
  }

  res.json({ total });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
