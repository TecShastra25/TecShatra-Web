import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    image: "/blog/web-dev.jpg",
    date: "March 15, 2024",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "AI Integration in Modern Applications",
    excerpt: "How artificial intelligence is revolutionizing the way we build and use applications.",
    image: "/blog/ai-integration.jpg",
    date: "March 10, 2024",
    category: "Artificial Intelligence",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Optimizing User Experience",
    excerpt: "Best practices for creating seamless and engaging user experiences.",
    image: "/blog/ux-optimization.jpg",
    date: "March 5, 2024",
    category: "UX Design",
    readTime: "4 min read"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white glow">
            Latest from Our Blog
          </h2>
          <p className="text-lgtext-gray-600 dark:text-gray-300 mx-auto">
            Stay updated with our latest insights, trends, and best practices in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-transparent backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-105">
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500/80 backdrop-blur-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-300 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{post.excerpt}</p>
                    <div className="mt-4">
                      <Button
                        onClick={() => window.open(post.url, '_blank')}
                        className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:opacity-90 transition-opacity w-full md:w-auto h-10 px-6 text-lg"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg transform hover:scale-105"
          >
            View All Posts
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;