import Razorpay from 'razorpay';
import { withErrorHandler, withRateLimit } from '../../lib/middleware';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

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

    // Convert USD to INR (approximate rate)
    const amountInINR = Math.round(course.price * 83); // 1 USD ≈ 83 INR

    const options = {
      amount: amountInINR * 100, // Convert to paisa
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      notes: {
        courseId: courseId,
        courseName: course.name,
        customerEmail: email
      }
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      course: {
        name: course.name,
        price: amountInINR,
        includedResources: course.includedResources
      }
    });
  } catch (error) {
    console.error('Razorpay Error:', error);
    res.status(500).json({ message: error.message });
  }
}

// Apply middleware
export default withRateLimit(withErrorHandler(handler));