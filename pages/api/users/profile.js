import { withErrorHandler, withRateLimit } from '../../../lib/middleware';
import { withAuth } from '../../../lib/middleware/auth';
import { db } from '../../../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const userId = req.user.uid;
      const userDoc = await getDoc(doc(db, 'users', userId));

      if (!userDoc.exists()) {
        return res.status(404).json({ message: 'User not found' });
      }

      const userData = userDoc.data();
      res.status(200).json({
        uid: userId,
        ...userData
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ message: 'Error fetching user profile' });
    }
  } else if (req.method === 'PUT') {
    try {
      const userId = req.user.uid;
      const { name, bio, profilePicture } = req.body;

      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        name,
        bio,
        profilePicture,
        updatedAt: new Date().toISOString()
      });

      res.status(200).json({
        message: 'Profile updated successfully',
        user: {
          uid: userId,
          name,
          bio,
          profilePicture
        }
      });
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ message: 'Error updating user profile' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default withRateLimit(withErrorHandler(withAuth(handler))); 