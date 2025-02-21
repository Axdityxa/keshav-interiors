import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Package, Home } from 'lucide-react';

const features = [
  {
    title: 'Turnkey Solutions',
    icon: Check,
    description: 'Transform your home into a beautiful, cosy space that\'s uniquely yours with our comprehensive interior services. End-to-End Interior Services, including design, execution and personalized solutions, we provide the best interior design for your needs',
  },
  {
    title: 'Design Expertise',
    icon: Award,
    description: 'Our skilled team of luxury interior designers brings your vision to life using practical materials and stunning aesthetics. We go beyond looks to enhance your lifestyle through thoughtful design',
  },
  {
    title: 'Modular Solutions',
    icon: Package,
    description: 'Discover top-notch home interiors in Bangalore with our modern factory. We craft modular kitchens and stunning wardrobe designs with unmatched quality and speedy delivery, exceeding your expectations every time',
  },
  {
    title: 'Home Decor & More',
    icon: Home,
    description: 'With vast experience and a 10,000 sq ft collection of home decor, Keshav Interiors Home Decor Experts are here to add those final touches, making your home the best it can be',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Keshav Interiors</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With extensive experience and access to a 10,000 square feet of home decor and furnishings,
            the Keshav Interiors Home Decor Experts are always at hand to lend the finishing touches, to make your home the best it can possibly be
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 text-accent">
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;