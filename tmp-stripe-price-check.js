const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
(async () => {
  const ids = ['price_1TJe8xCo3uxrqWYVJN8qfcmc','price_1TJe9yCo3uxrqWYVVfx77R8v'];
  for (const id of ids) {
    try {
      const price = await stripe.prices.retrieve(id);
      console.log(id, price.type, price.recurring ? price.recurring.interval : 'one-time', price.product);
    } catch (err) {
      console.error('ERR', id, err.message);
    }
  }
})();
