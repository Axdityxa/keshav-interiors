import React from 'react';
import { motion } from 'framer-motion';

const projects = {
  commercial: [
    {
      title: 'White Garden Restaurant - Bangalore',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Habit Salon - Manipal',
      image: 'https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Toni & Guy',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Pink Verranda',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
    },
  ],
  residential: [
    {
      title: 'Menlo Park - Whitefield',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Prestige Woodland Park',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Purva Skywood',
      image: 'https://images.unsplash.com/photo-1600607687644-c7f34c5a3f6b?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Embassy Lake Terraces',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    },
  ],
};

const Portfolio = () => {
  return (
    <section className="section bg-primary">
      <div className="container">
        {/* Commercial Portfolio */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Interior Design Portfolio</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our Commercial interior Portfolio showcasing impressive designs tailored for businesses. Explore spaces that blend functionality and style to increase the revenue for your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.commercial.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View More ...
            </motion.button>
          </div>
        </div>

        {/* Residential Portfolio */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Residential Interior Design Portfolio</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our Residential Interior Portfolio for beautiful home designs that mix style and practicality. Find spaces that match your unique taste
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.residential.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View More ...
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;