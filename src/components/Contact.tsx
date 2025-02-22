import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2000&auto=format&fit=crop")',
    }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded" rows={4} required />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
