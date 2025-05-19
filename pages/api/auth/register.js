import { withErrorHandler, withRateLimit } from '../../../lib/middleware';
import { auth, db } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, name } = req.body;

    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      createdAt: new Date().toISOString(),
      role: 'student',
      enrolledCourses: [],
      completedCourses: []
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        uid: user.uid,
        email: user.email,
        name
      }
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(400).json({ message: error.message });
  }
}

export default withRateLimit(withErrorHandler(handler)); 