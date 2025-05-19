import { useState } from 'react';
import axios from 'axios';

export default function ApiTest() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post('/api/auth/register', {
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('name')
      });
      setMessage('Registration successful!');
      console.log('Registration response:', response.data);
    } catch (error) {
      setMessage('Registration failed: ' + error.response?.data?.message);
    }
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post('/api/auth/login', {
        email: formData.get('email'),
        password: formData.get('password')
      });
      setToken(response.data.user.token);
      setUser(response.data.user);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed: ' + error.response?.data?.message);
    }
  };

  // Get Profile
  const handleGetProfile = async () => {
    try {
      const response = await axios.get('/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setMessage('Profile fetched successfully!');
    } catch (error) {
      setMessage('Failed to fetch profile: ' + error.response?.data?.message);
    }
  };

  // Update Profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.put('/api/users/profile', {
        name: formData.get('name'),
        bio: formData.get('bio'),
        profilePicture: formData.get('profilePicture')
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data.user);
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage('Failed to update profile: ' + error.response?.data?.message);
    }
  };

  // Get Courses
  const handleGetCourses = async () => {
    try {
      const response = await axios.get('/api/courses', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(response.data);
      setMessage('Courses fetched successfully!');
    } catch (error) {
      setMessage('Failed to fetch courses: ' + error.response?.data?.message);
    }
  };

  // Create Course
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post('/api/courses', {
        title: formData.get('title'),
        description: formData.get('description'),
        price: parseFloat(formData.get('price')),
        content: formData.get('content'),
        instructorId: user.uid
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Course created successfully!');
      handleGetCourses(); // Refresh courses list
    } catch (error) {
      setMessage('Failed to create course: ' + error.response?.data?.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      
      {message && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Registration Form */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Register</h2>
          <form onSubmit={handleRegister} className="space-y-2">
            <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
          </form>
        </div>

        {/* Login Form */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Login</h2>
          <form onSubmit={handleLogin} className="space-y-2">
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
          </form>
        </div>

        {/* Profile Section */}
        {token && (
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Profile</h2>
            <button onClick={handleGetProfile} className="bg-purple-500 text-white px-4 py-2 rounded mb-4">
              Get Profile
            </button>
            
            <form onSubmit={handleUpdateProfile} className="space-y-2">
              <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" />
              <textarea name="bio" placeholder="Bio" className="w-full p-2 border rounded"></textarea>
              <input type="text" name="profilePicture" placeholder="Profile Picture URL" className="w-full p-2 border rounded" />
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Update Profile</button>
            </form>
          </div>
        )}

        {/* Courses Section */}
        {token && (
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Courses</h2>
            <button onClick={handleGetCourses} className="bg-indigo-500 text-white px-4 py-2 rounded mb-4">
              Get Courses
            </button>
            
            <form onSubmit={handleCreateCourse} className="space-y-2">
              <input type="text" name="title" placeholder="Course Title" className="w-full p-2 border rounded" />
              <textarea name="description" placeholder="Course Description" className="w-full p-2 border rounded"></textarea>
              <input type="number" name="price" placeholder="Price" className="w-full p-2 border rounded" />
              <textarea name="content" placeholder="Course Content" className="w-full p-2 border rounded"></textarea>
              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Create Course</button>
            </form>

            {/* Display Courses */}
            {courses.length > 0 && (
              <div className="mt-4">
                <h3 className="font-bold mb-2">Available Courses:</h3>
                <div className="space-y-2">
                  {courses.map(course => (
                    <div key={course.id} className="border p-2 rounded">
                      <h4 className="font-bold">{course.title}</h4>
                      <p>{course.description}</p>
                      <p className="text-sm text-gray-600">Price: ${course.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 