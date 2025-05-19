import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuthStore from '../../store/authStore'
import { FiUser, FiMail, FiPhone, FiMapPin, FiBook, FiShoppingBag } from 'react-icons/fi'

export default function Profile() {
  const router = useRouter()
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState('profile')

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'courses', label: 'My Courses', icon: FiBook },
    { id: 'orders', label: 'Orders', icon: FiShoppingBag }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Profile Header */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-3xl">
                  {user.email[0].toUpperCase()}
                </div>
                <motion.div
                  className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
                <p className="text-gray-300">{user.email}</p>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <tab.icon size={20} />
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div variants={itemVariants} className="md:col-span-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                {activeTab === 'profile' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-300">
                          <FiUser />
                          <span>John Doe</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                          <FiMail />
                          <span>{user.email}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-300">
                          <FiPhone />
                          <span>+1 234 567 890</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                          <FiMapPin />
                          <span>New York, USA</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'courses' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">My Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Course cards will go here */}
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300">No courses purchased yet.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'orders' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">Order History</h2>
                    <div className="space-y-4">
                      {/* Order items will go here */}
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300">No orders yet.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}