import { motion } from "framer-motion";
import { FaPaintBrush, FaServer, FaCode } from "react-icons/fa";

const services = [
  {
    title: "Développement Frontend",
    desc: "Création d'interfaces modernes, réactives et accessibles.",
    icon: <FaPaintBrush size={40} className="text-green-600" />,
  },
  {
    title: "Développement Backend",
    desc: "Conception d’API robustes, sécurisées et performantes.",
    icon: <FaServer size={40} className="text-green-600" />,
  },
  {
    title: "Applications Web complètes",
    desc: "Du design à la mise en production, je réalise des solutions sur mesure.",
    icon: <FaCode size={40} className="text-green-600" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          En tant que développeur full-stack, je propose une gamme de services
          allant de la conception d’interfaces modernes jusqu’à l’intégration de
          solutions backend robustes. Voici ce que je peux vous offrir :
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-transparent border border-green-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
