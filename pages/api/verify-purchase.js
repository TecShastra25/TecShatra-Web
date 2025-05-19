import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { session_id } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const courseId = session.metadata.courseId;

    // Get course data from our database or static data
    const course = {
      name: session.line_items?.data[0]?.description,
      includedResources: [
        "Complete Course Material",
        "Downloadable Resources",
        "Project Files",
        "Certificate of Completion",
        "Lifetime Access",
      ],
      // Add any other course details you want to display
    };

    res.status(200).json({ course });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error verifying purchase' });
  }
}