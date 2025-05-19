import Stripe from 'stripe';
import Razorpay from 'razorpay';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Disable body parser for webhooks
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'] || req.headers['x-razorpay-signature'];
  const paymentGateway = req.query.gateway;

  try {
    let event;

    if (paymentGateway === 'stripe') {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );

      // Handle Stripe events
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        await handleSuccessfulPayment({
          courseId: session.metadata.courseId,
          customerId: session.customer,
          paymentId: session.payment_intent,
          amount: session.amount_total,
          gateway: 'stripe'
        });
      }
    } else if (paymentGateway === 'razorpay') {
      // Verify Razorpay webhook signature
      const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
      const shasum = crypto.createHmac('sha256', webhookSecret);
      shasum.update(buf.toString());
      const digest = shasum.digest('hex');

      if (digest === sig) {
        const payment = JSON.parse(buf.toString());
        
        if (payment.event === 'payment.captured') {
          await handleSuccessfulPayment({
            courseId: payment.payload.payment.entity.notes.courseId,
            customerId: payment.payload.payment.entity.customer_id,
            paymentId: payment.payload.payment.entity.id,
            amount: payment.payload.payment.entity.amount,
            gateway: 'razorpay'
          });
        }
      }
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}

async function handleSuccessfulPayment({ courseId, customerId, paymentId, amount, gateway }) {
  try {
    // Here you would:
    // 1. Update your database to mark the course as purchased
    // 2. Grant access to the course materials
    // 3. Send confirmation email to the customer
    // 4. Update analytics
    
    // For now, we'll just log the successful payment
    console.log('Successful payment:', {
      courseId,
      customerId,
      paymentId,
      amount,
      gateway,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error handling payment:', error);
    throw error;
  }
}