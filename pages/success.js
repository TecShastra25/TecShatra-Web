import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import FloatingShape from '../components/kokonutui/FloatingShape';
import PDFResource from '../components/PDFResource';

export default function SuccessPage() {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const { session_id } = router.query;

  useEffect(() => {
    if (session_id) {
      // Fetch the course details using the session ID
      fetch(`/api/verify-purchase?session_id=${session_id}`)
        .then(res => res.json())
        .then(data => {
          if (data.course) {
            setCourse(data.course);
          }
        })
        .catch(console.error);
    }
  }, [session_id]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape delay={0.2} width={400} height={100} rotate={15} gradient="from-green-500/[0.15]" className="right-[-5%] top-[20%]" />
        <FloatingShape delay={0.4} width={300} height={80} rotate={-10} gradient="from-emerald-500/[0.15]" className="left-[-5%] top-[40%]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
              }}
              className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          </div>

          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Payment Successful!
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Thank you for enrolling in our course
          </motion.p>

          {course && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-white/5 border-0 mb-8">
                <h2 className="text-2xl font-semibold mb-4">{course.name}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Included Resources:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {course.includedResources?.map((resource, index) => (
                        <li key={index}>{resource}</li>
                      ))}
                    </ul>
                  </div>
                  {course && <PDFResource course={course} />}
                </div>
              </Card>
            </motion.div>
          )}

          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              onClick={() => router.push('/courses')}
              variant="outline"
              className="mr-4"
            >
              Browse More Courses
            </Button>
            <Button
              onClick={() => router.push('/profile')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Go to My Courses
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}