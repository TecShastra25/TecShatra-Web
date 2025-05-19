import Stripe from 'stripe';
import { withErrorHandler, withRateLimit } from '../../lib/middleware';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { courseId, email } = req.body;
    const course = courses[courseId];

    if (!course) {
      return res.status(400).json({ message: 'Invalid course ID' });
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: course.name,
              description: course.description,
              metadata: {
                courseId: courseId
              }
            },
            unit_amount: course.price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        courseId: courseId,
      },
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses`,
      allow_promotion_codes: true,
      customer_email: email,
    });

    res.status(200).json({ 
      id: session.id,
      course: {
        name: course.name,
        price: course.price,
        includedResources: course.includedResources
      }
    });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ message: error.message });
  }
}

// Apply middleware
export default withRateLimit(withErrorHandler(handler));