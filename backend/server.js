const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51LnUKJDM1jwCEz8OJG69szv032rIo4X0WrFMaXrqxu9g8fdohsL1y54JEUhFUKrqoBquVjN3AzpIFyrbN915bgcd00O5hqoGCJ"
);

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Create a checkout session in Stripe
app.post("/checkout", async (req, res) => {
  try {
    const { items } = req.body;

    // Create a product in Stripe
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          description: item.description,
          images: item.images,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Create a checkout session in Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    // res.status(200).json({ sessionId: session.id })

    res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the checkout session" });
  }
});

// Start the server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
