import { withErrorHandler, withRateLimit } from '../../../lib/middleware';
import { auth } from '../../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // Sign in user with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get the ID token
    const token = await user.getIdToken();

    res.status(200).json({
      message: 'Login successful',
      user: {
        uid: user.uid,
        email: user.email,
        token
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(401).json({ message: 'Invalid credentials' });
  }
}

export default withRateLimit(withErrorHandler(handler)); 