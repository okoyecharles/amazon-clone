const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')('sk_test_51LKikxJIr5sMtV8TWN9XQaK7G7nc8gtd1mCKchzPt3d4NbHqjq860IzeBJoj52mKVcvSHzLgdzRtytqr7p0HMT1F00qU8rtWEG');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved BOOOM!!! for this amount >>> ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen command
exports.api = functions.https.onRequest(app);


// Example endpoint
// (http://localhost:5001/clone-f50ae/us-central1/api)