import { motion } from 'framer-motion';

const tours = [
  {
    title: 'Prestige Woodland Park',
    videoId: 'VIDEO_ID_1',
    thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'SNN Raj Etternia',
    videoId: 'VIDEO_ID_2',
    thumbnail: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Suraj & Rayshma',
    videoId: 'VIDEO_ID_3',
    thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
  },
];

const HomeTours = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tour of our Homes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our Home Tours & stunning designs curated by our expert designers. Step into inspiring spaces crafted for comfort and style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src={tour.thumbnail}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mb-4">
                  <div className="w-0 h-0 border-l-[20px] border-l-accent border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </div>
                <h3 className="text-white text-xl font-medium">{tour.title}</h3>
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
    </section>
  );
};

export default HomeTours;