export const formatCourseData = (course) => {
  return {
    ...course,
    formattedPrice: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(course.price),
    durationInWeeks: parseInt(course.duration),
    pdfFileName: `${course.title.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`
  };
};

export const getCourseMaterials = (courseTitle) => {
  const baseMaterials = [
    'Course Syllabus',
    'Practice Exercises',
    'Assignment Solutions',
    'Project Templates',
    'Resource Links'
  ];

  const courseSpecificMaterials = {
    'Web Development': [
      'HTML/CSS Templates',
      'JavaScript Code Samples',
      'React Components Library',
      'API Documentation',
      'Deployment Guides'
    ],
    'Data Science': [
      'Dataset Collections',
      'Jupyter Notebooks',
      'Statistical Analysis Templates',
      'ML Model Examples',
      'Visualization Scripts'
    ],
    'Cloud Computing': [
      'AWS Setup Guides',
      'Docker Configurations',
      'Kubernetes Manifests',
      'CI/CD Pipeline Templates',
      'Cloud Architecture Diagrams'
    ],
    // Add more course-specific materials as needed
  };

  // Find matching course materials or return default ones
  const matchingCourse = Object.keys(courseSpecificMaterials)
    .find(key => courseTitle.toLowerCase().includes(key.toLowerCase()));

  return {
    baseMaterials,
    specificMaterials: matchingCourse ? courseSpecificMaterials[matchingCourse] : []
  };
};

export const calculateCourseProgress = (courseDuration) => {
  const weeks = parseInt(courseDuration);
  return Array.from({ length: weeks }, (_, i) => ({
    week: i + 1,
    topics: getWeeklyTopics(i + 1),
    assignments: getWeeklyAssignments(i + 1)
  }));
};

function getWeeklyTopics(week) {
  // Placeholder function - in a real app, this would fetch from a database
  return [
    'Core Concepts',
    'Practical Implementation',
    'Project Work',
    'Assessment'
  ];
}

function getWeeklyAssignments(week) {
  // Placeholder function - in a real app, this would fetch from a database
  return [
    'Reading Materials',
    'Coding Exercises',
    'Quiz',
    'Project Milestone'
  ];
}

export const generateCertificateData = (course, studentName) => {
  return {
    certificateId: `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    courseName: course.title,
    studentName,
    completionDate: new Date().toLocaleDateString(),
    instructorName: 'Dr. Sarah Johnson', // Placeholder
    validityUrl: `https://verify.tecshastra.com/cert/${this.certificateId}`
  };
};