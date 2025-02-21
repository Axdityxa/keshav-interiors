import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: 'Keshav Interiors guys have been great, We call this our dream home and Keshav Interiors has given us our dream home. One thing that stood out particularly well was that there was never a "No" at any point. We would recommend our friends as well to go with Keshav Interiors',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
    video: true
  },
  {
    content: 'My husband and I had an extremely beautiful experience with Keshav Interiors recently when they did the interior of our 3BHK apartment. What we liked most about Keshav Interiors was, although, they are all running a business, Keshav Interiors gave us that "we will design it like it\'s our home" kind of feeling',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop'
  },
  {
    content: 'A heartfelt thank you and appreciations to Team Keshav Interiors Interior Design Studio. We leveraged their interior design services to make up our 3 BHK apartment in Bengaluru. Our experience has been nothing less than "Awesome". Really appreciate all your efforts in the making of our Dream home. Thanks Keshav Interiors Team.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear it from our customers</h2>
          <p className="text-gray-600">
            Explore testimonials highlighting their experiences with our services. Discover firsthand how we've transformed homes with our expert touch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                {testimonial.video ? (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-accent border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                    </div>
                  </div>
                ) : null}
                <img
                  src={testimonial.image}
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;