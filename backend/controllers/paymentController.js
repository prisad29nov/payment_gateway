require("dotenv").config();

const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: "process.env.RAZORPAY_API_KEY",
  key_secret: "process.env.RAZORPAY_API_SECRET",
});

const checkout =(req, res) => {
  const options = {
    // amount: Number(req.body.cartTotal*100), // amount in the smallest currency unit
    amount:5000,
    currency: "INR",
  };
  const order = instance.orders.create(options);
  console.log(order);

  res.status(400).json({
    success: true,
    // order,
  });
};

module.exports = checkout;
