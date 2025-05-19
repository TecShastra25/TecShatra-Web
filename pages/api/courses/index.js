import { withErrorHandler, withRateLimit } from '../../../lib/middleware';
import { withAuth } from '../../../lib/middleware/auth';
import { db } from '../../../firebase/firebase';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const coursesRef = collection(db, 'courses');
      const coursesSnapshot = await getDocs(coursesRef);
      const courses = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      res.status(200).json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Error fetching courses' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, description, price, content, instructorId } = req.body;

      const courseData = {
        title,
        description,
        price,
        content,
        instructorId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        enrolledStudents: 0,
        rating: 0,
        totalRatings: 0
      };

      const docRef = await addDoc(collection(db, 'courses'), courseData);
      
      res.status(201).json({
        id: docRef.id,
        ...courseData
      });
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ message: 'Error creating course' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default withRateLimit(withErrorHandler(withAuth(handler))); 