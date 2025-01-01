const express = import("express");
const stripe = import("stripe")("your-stripe-secret-key"); // Your secret Stripe API key
const cors = import("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create Checkout session
app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation",
            description: "Support me with a donation",
          },
          unit_amount: 500, // Amount in cents, e.g., 500 means $5.00
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.HOST_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.HOST_URL}/cancel`,
  });

  res.json({ id: session.id });
});

// Run the server
app.listen(4242, () => {
  console.log("Server running on port 4242");
});
