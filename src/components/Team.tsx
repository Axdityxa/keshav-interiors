import { motion } from 'framer-motion';
import { Armchair, Users, Wrench } from 'lucide-react';

const teamMembers = [
  {
    role: 'Interior Designer',
    icon: Armchair,
    description: 'Our turnkey interior designers bring your dream designs to life. They are your design guide, working with you through design & solutions. They craft 3D plans and collaborate with specialists to flawlessly execute your vision',
  },
  {
    role: 'Customer Relationship Manager',
    icon: Users,
    description: 'Our Customer Relationship Manager is your go-to person, acting as your translator, helper, and friend. They grasp your home design needs, watch your budget, communicate them to our experts, and ensure a hassle-free experience for you',
  },
  {
    role: 'Project Manager',
    icon: Wrench,
    description: 'Project Managers ensure the modular factory and site work process smoothly. They ensure all teams coordinate closely, eliminating any hassles in the process',
  },
];

const Team = () => {
  return (
    <section className="section bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Behind Your Dream Home</h2>
          <p className="text-gray-600">These are the people who translate your vision to reality</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 text-accent">
                <member.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-3">{member.role}</h3>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Keshav Interiors Decor Experts</h3>
            <p className="text-gray-600">
              Keshav Interiors Home Decor Experts bring vast experience and a 10,000 square feet range of home decor. They're here to add those final touches and make your home the best it can be
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;