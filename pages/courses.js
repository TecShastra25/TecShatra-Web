import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import FloatingShape from "../components/kokonutui/FloatingShape";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import PDFResource from "../components/PDFResource";
import { motion } from "framer-motion";
import PaymentSelector from "../components/PaymentSelector";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Full-stack web development with React, Node.js, and MongoDB",
    price: 499,
    duration: "12 weeks",
    level: "Beginner to Advanced",
    image: "/images/courseImages/webdev.jpg",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description:
      "Learn Python, Data Analysis, Machine Learning, and Statistics",
    price: 599,
    duration: "16 weeks",
    level: "Intermediate",
    image: "/images/courseImages/datascience.jpg",
  },
  {
    id: 3,
    title: "Cloud Computing & DevOps",
    description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines",
    price: 699,
    duration: "14 weeks",
    level: "Advanced",
    image: "/images/courseImages/cloud.jpg",
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    description:
      "Network security, ethical hacking, and security best practices",
    price: 799,
    duration: "16 weeks",
    level: "Intermediate to Advanced",
    image: "/images/courseImages/cybersecurity.jpg",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Create iOS and Android apps using React Native and Flutter",
    price: 649,
    duration: "12 weeks",
    level: "Intermediate",
    image: "/images/courseImages/mobile.jpg",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    description: "Deep Learning, Neural Networks, and AI Applications",
    price: 899,
    duration: "20 weeks",
    level: "Advanced",
    image: "/images/courseImages/ai.jpg",
  },
  {
    id: 7,
    title: "Blockchain Development",
    description: "Smart Contracts, DApps, and Cryptocurrency",
    price: 799,
    duration: "14 weeks",
    level: "Advanced",
    image: "/images/courseImages/blockchain.jpg",
  },
  {
    id: 8,
    title: "UI/UX Design",
    description: "Design Thinking, Wireframing, and Prototyping",
    price: 549,
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    image: "/images/courseImages/uiux.jpg",
  },
  {
    id: 9,
    title: "Game Development",
    description: "Learn Unity, C#, and Game Design Principles",
    price: 749,
    duration: "16 weeks",
    level: "Intermediate",
    image: "/images/courseImages/gamedev.jpg",
    highlights: [
      "3D Game Development",
      "Game Physics",
      "Multiplayer Gaming",
      "Asset Creation",
    ],
  },
  {
    id: 10,
    title: "Digital Marketing",
    description: "Master SEO, Social Media, and Content Marketing",
    price: 449,
    duration: "8 weeks",
    level: "Beginner",
    image: "/images/courseImages/marketing.jpg",
    highlights: [
      "SEO Optimization",
      "Social Media Strategy",
      "Email Marketing",
      "Analytics",
    ],
  },
  {
    id: 11,
    title: "IoT Development",
    description: "Build Smart Devices and IoT Solutions",
    price: 699,
    duration: "12 weeks",
    level: "Intermediate",
    image: "/images/courseImages/iot.jpg",
    highlights: [
      "Sensor Programming",
      "IoT Protocols",
      "Edge Computing",
      "IoT Security",
    ],
  },
  {
    id: 12,
    title: "Quality Assurance",
    description: "Software Testing and Quality Assurance",
    price: 549,
    duration: "10 weeks",
    level: "Intermediate",
    image: "/images/courseImages/qa.jpg",
    highlights: [
      "Test Automation",
      "Performance Testing",
      "Security Testing",
      "API Testing",
    ],
  },
];

const courseResources = {
  webDevelopment: [
    {
      title: "HTML/CSS Study Guide",
      description: "Complete guide to modern HTML5 and CSS3",
      pdfUrl: "/resources/web-dev/html-css-guide.pdf",
    },
    {
      title: "JavaScript Fundamentals",
      description: "Essential concepts in JavaScript programming",
      pdfUrl: "/resources/web-dev/js-fundamentals.pdf",
    },
  ],
  dataScience: [
    {
      title: "Python for Data Science",
      description: "Python programming basics for data analysis",
      pdfUrl: "/resources/data-science/python-guide.pdf",
    },
    {
      title: "Statistical Analysis Guide",
      description: "Comprehensive statistics for data science",
      pdfUrl: "/resources/data-science/statistics.pdf",
    },
  ],
};

const youtubeVideos = {
  webDevelopment: [
    {
      id: 1,
      title: "Complete Web Development Roadmap 2024",
      thumbnail: "https://img.youtube.com/vi/CS5HV_gnfac/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=CS5HV_gnfac",
      duration: "45:20",
      description:
        "A comprehensive guide to becoming a full-stack web developer",
      author: "TecShastra Academy",
    },
    {
      id: 2,
      title: "React.js Full Course for Beginners",
      thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
      duration: "1:15:30",
      description: "Learn React.js from scratch with practical projects",
      author: "freeCodeCamp",
    },
  ],
  dataScience: [
    {
      id: 3,
      title: "Python for Data Science - Complete Tutorial",
      thumbnail: "https://img.youtube.com/vi/LHBE6Q9XlzI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=LHBE6Q9XlzI",
      duration: "1:30:15",
      description:
        "Master Python libraries for data analysis and visualization",
      author: "TecShastra Academy",
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      thumbnail: "https://img.youtube.com/vi/NWONeJKn6kc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=NWONeJKn6kc",
      duration: "55:45",
      description: "Introduction to machine learning concepts and algorithms",
      author: "Google AI",
    },
  ],
  cybersecurity: [
    {
      id: 5,
      title: "Ethical Hacking for Beginners",
      thumbnail: "https://img.youtube.com/vi/3Kq1MIfTWCE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
      duration: "2:10:30",
      description:
        "Learn the basics of ethical hacking and penetration testing",
      author: "TecShastra Security",
    },
    {
      id: 6,
      title: "Network Security Fundamentals",
      thumbnail: "https://img.youtube.com/vi/qiQR5rTSshw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=qiQR5rTSshw",
      duration: "1:25:15",
      description:
        "Understanding network security protocols and best practices",
      author: "Cybersecurity Experts",
    },
  ],
  mobile: [
    {
      id: 7,
      title: "React Native Crash Course",
      thumbnail: "https://img.youtube.com/vi/0-S5a0eXPoc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
      duration: "1:45:20",
      description: "Build your first mobile app with React Native",
      author: "TecShastra Mobile",
    },
    {
      id: 8,
      title: "Flutter Development Tutorial",
      thumbnail: "https://img.youtube.com/vi/1ukSR1GRtMU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
      duration: "2:00:00",
      description: "Complete guide to Flutter app development",
      author: "Flutter Team",
    },
  ],
};

const learningPathsData = [
  {
    title: "Web Development Path",
    steps: [
      "HTML, CSS, and JavaScript Fundamentals (4 weeks)",
      "Frontend Frameworks - React/Vue.js (6 weeks)",
      "Backend Development with Node.js (4 weeks)",
      "Database Management (4 weeks)",
      "Deployment and DevOps (2 weeks)",
    ],
    icon: "🌐",
  },
  {
    title: "Data Science Path",
    steps: [
      "Python Programming Basics (4 weeks)",
      "Data Analysis with Pandas (4 weeks)",
      "Machine Learning Fundamentals (6 weeks)",
      "Deep Learning and Neural Networks (4 weeks)",
      "Data Visualization and Reporting (2 weeks)",
    ],
    icon: "📊",
  },
  {
    title: "Mobile Development Path",
    steps: [
      "Mobile UI/UX Design Principles (3 weeks)",
      "React Native Fundamentals (5 weeks)",
      "State Management and APIs (4 weeks)",
      "Native Device Features (3 weeks)",
      "App Store Deployment (1 week)",
    ],
    icon: "📱",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    document.body.appendChild(script);
  });
};

export default function CoursesPage() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("webDevelopment");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showPaymentSelector, setShowPaymentSelector] = useState(false);

  useEffect(() => {
    loadRazorpay();
  }, []);

  const handlePurchase = (courseId) => {
    setSelectedCourse(courses.find((course) => course.id === courseId));
    setShowPaymentSelector(true);
  };

  const handlePaymentMethodSelect = async (method) => {
    if (!selectedCourse) return;

    try {
      setLoading(true);
      const endpoint =
        method === "stripe"
          ? "/api/create-checkout-session"
          : "/api/create-razorpay-order";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: selectedCourse.id }),
      });

      const data = await response.json();

      if (method === "stripe") {
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: data.currency,
          name: "TecShastra Academy",
          description: `Purchase ${selectedCourse.title}`,
          order_id: data.orderId,
          handler: (response) => {
            window.location.href = `/success?session_id=${response.razorpay_payment_id}`;
          },
          prefill: {
            name: "",
            email: "",
          },
          theme: { color: "#8B5CF6" },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Floating Shapes Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top section shapes */}
        <FloatingShape
          scrollEffect={true}
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="absolute left-[-10%] top-[15%]"
        />
        <FloatingShape
          scrollEffect={true}
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="absolute right-[-5%] top-[20%]"
        />
        <FloatingShape
          scrollEffect={true}
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="absolute left-[5%] top-[30%]"
        />
        <FloatingShape
          scrollEffect={true}
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="absolute left-[20%] top-[5%]"
        />

        {/* Middle section shapes */}
        <FloatingShape
          scrollEffect={true}
          delay={0.6}
          width={400}
          height={100}
          rotate={20}
          gradient="from-purple-500/[0.15]"
          className="absolute right-[15%] top-[45%]"
        />
        <FloatingShape
          scrollEffect={true}
          delay={0.8}
          width={350}
          height={90}
          rotate={-12}
          gradient="from-pink-500/[0.15]"
          className="absolute left-[25%] top-[55%]"
        />
        <FloatingShape
          scrollEffect={true}
          delay={0.9}
          width={200}
          height={60}
          rotate={15}
          gradient="from-blue-500/[0.15]"
          className="absolute right-[30%] top-[60%]"
        />

        {/* Bottom section shapes */}
        <FloatingShape
          scrollEffect={true}
          delay={1.0}
          width={450}
          height={110}
          rotate={-18}
          gradient="from-emerald-500/[0.15]"
          className="absolute left-[-5%] bottom-[15%]"
        />
        <FloatingShape
          scrollEffect={true}
          delay={1.2}
          width={280}
          height={70}
          rotate={25}
          gradient="from-amber-500/[0.15]"
          className="absolute right-[10%] bottom-[25%]"
        />
        <FloatingShape
          scrollEffect={true}
          delay={1.4}
          width={180}
          height={50}
          rotate={-22}
          gradient="from-teal-500/[0.15]"
          className="absolute left-[35%] bottom-[5%]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 relative z-10"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl text-center font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 relative"
          style={{
            textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
          }}
        >
          Our Courses
        </motion.h1>

        {/* Courses Grid Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={item}>
              <Card className="h-full backdrop-blur-sm bg-transparent border border-white/10 hover:bg-white/5 transition-all duration-300 ease-in-out rounded-[24px] overflow-hidden shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden rounded-t-[24px]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-300">{course.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <span className="flex items-center">
                      <span className="mr-2">⏱️</span>
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-2">📊</span>
                      {course.level}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 block mb-6">
                      ${course.price}
                    </span>
                    <div className="flex flex-col gap-3 items-center">
                      <Button
                        onClick={() => handlePurchase(course.id)}
                        className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity w-full h-11 text-base"
                      >
                        Enroll Now
                      </Button>
                      <Button
                        variant="outline"
                        className=" hover:opacity-90 transition-opacity w-full"
                      >
                        <PDFResource course={course} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* YouTube Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-4xl text-center font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Free Tutorial Videos
          </h2>

          <Tabs defaultValue="webDevelopment" className="w-full">
            <TabsList className="grid w-3/4 mx-auto grid-cols-2 lg:grid-cols-4 mb-8 p-1 bg-black/20 backdrop-blur-sm rounded-full gap-2">
              <TabsTrigger
                value="webDevelopment"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary rounded-full transition-all duration-300 hover:bg-white/10 data-[state=active]:text-white px-3 py-1.5 text-sm"
              >
                Web Development
              </TabsTrigger>
              <TabsTrigger
                value="dataScience"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary rounded-full transition-all duration-300 hover:bg-white/10 data-[state=active]:text-white px-3 py-1.5 text-sm"
              >
                Data Science
              </TabsTrigger>
              <TabsTrigger
                value="cybersecurity"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary rounded-full transition-all duration-300 hover:bg-white/10 data-[state=active]:text-white px-3 py-1.5 text-sm"
              >
                CyberSecurity
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary rounded-full transition-all duration-300 hover:bg-white/10 data-[state=active]:text-white px-3 py-1.5 text-sm"
              >
                Mobile developement
              </TabsTrigger>
            </TabsList>

            {Object.entries(youtubeVideos).map(([category, videos]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {videos.map((video) => (
                    <Card
                      key={video.id}
                      className="p-6 backdrop-blur-sm bg-transparent border-0 hover:bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative w-full md:w-2/5 h-48 rounded-lg overflow-hidden">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-white">
                            {video.title}
                          </h3>
                          <p className="text-gray-300 mb-2">
                            {video.description}
                          </p>
                          <p className="text-sm text-gray-400 mb-4">
                            By {video.author}
                          </p>
                          <Button
                            onClick={() =>
                              window.open(video.videoUrl, "_blank")
                            }
                            className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:opacity-90 transition-opacity w-full md:w-auto h-10 px-6 text-lg" // Added h-14, px-6, and text-lg
                          >
                            Watch Video
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl text-center font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 backdrop-blur-sm bg-transparent border-0">
              <h3 className="text-xl font-semibold mb-3 text-white">
                How do the courses work?
              </h3>
              <p className="text-gray-300">
                Our courses are delivered through a combination of video
                lectures, hands-on projects, and interactive assignments. You'll
                have access to course materials 24/7 and can learn at your own
                pace.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-transparent border-0">
              <h3 className="text-xl font-semibold mb-3 text-white">
                What support do I get?
              </h3>
              <p className="text-gray-300">
                You'll have access to our community forum, weekly live Q&A
                sessions, and direct messaging with instructors. We also provide
                code reviews and personal feedback on your projects.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-transparent border-0">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Are there any prerequisites?
              </h3>
              <p className="text-gray-300">
                Prerequisites vary by course. Beginner courses have no
                prerequisites, while advanced courses may require basic
                programming knowledge or specific skills. Check each course
                description for details.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-transparent border-0">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Do I get a certificate?
              </h3>
              <p className="text-gray-300">
                Yes! Upon completion of any course, you'll receive a verified
                digital certificate that you can share on LinkedIn or with
                potential employers.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Payment Selector Modal */}
        {showPaymentSelector && selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowPaymentSelector(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-background p-6 rounded-lg shadow-xl max-w-md w-full m-4"
            >
              <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
              <PaymentSelector
                course={selectedCourse}
                onPaymentSelect={handlePaymentMethodSelect}
                loading={loading}
              />
              <button
                onClick={() => setShowPaymentSelector(false)}
                className="mt-4 text-gray-400 hover:text-gray-300 text-m"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
