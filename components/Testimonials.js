import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/testimonials/sarah.jpg",
    quote: "TecShastra transformed our digital presence completely. Their team's expertise and dedication are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "/testimonials/michael.jpg",
    quote: "Working with TecShastra was a game-changer for our business. They delivered beyond our expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLabs",
    image: "/testimonials/emily.jpg",
    quote: "The team at TecShastra understands our vision perfectly. They're not just developers, they're partners in our success.",
    rating: 5
  }
];

export default function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-lgtext-gray-600 dark:text-gray-300 mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-transparent backdrop-blur-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-white/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}